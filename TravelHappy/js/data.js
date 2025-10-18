// 数据管理模块
class TravelDataManager {
  constructor() {
    this.currentTrip = null;
    this.trips = this.loadTrips();
    this.expenses = this.loadExpenses();
    this.init();
  }

  init() {
    // 如果没有数据，创建示例数据
    if (this.trips.length === 0) {
      this.createSampleData();
    }
    
    // 设置当前旅行
    if (!this.currentTrip && this.trips.length > 0) {
      this.currentTrip = this.trips[0];
    }
  }

  // 创建示例数据
  createSampleData() {
    const sampleTrips = [
      {
        id: 'trip-1',
        name: '京都赏樱之旅',
        destination: '京都, 日本',
        startDate: '2024-10-12',
        endDate: '2024-10-15',
        budget: 3000,
        currency: 'CNY',
        type: 'cultural',
        status: 'active',
        createdAt: new Date().toISOString(),
        description: '追寻千年古都的秋日美景，体验传统与现代的完美融合'
      },
      {
        id: 'trip-2',
        name: '首尔购物游',
        destination: '首尔, 韩国',
        startDate: '2024-09-20',
        endDate: '2024-09-25',
        budget: 2500,
        currency: 'CNY',
        type: 'leisure',
        status: 'completed',
        createdAt: new Date().toISOString(),
        description: '探索韩流文化，品尝地道美食，享受购物乐趣'
      },
      {
        id: 'trip-3',
        name: '巴厘岛度假',
        destination: '巴厘岛, 印度尼西亚',
        startDate: '2024-11-01',
        endDate: '2024-11-07',
        budget: 4000,
        currency: 'CNY',
        type: 'leisure',
        status: 'planned',
        createdAt: new Date().toISOString(),
        description: '热带天堂的完美假期，沙滩、阳光、SPA'
      }
    ];

    const sampleExpenses = [
      {
        id: 'expense-1',
        tripId: 'trip-1',
        amount: 58,
        currency: 'CNY',
        category: 'shopping',
        description: '清水寺纪念品',
        note: '在清水寺买了手作和扇，心情很好 🎌',
        location: '清水寺, 京都',
        mood: 'happy',
        moodScore: 9.5,
        timestamp: new Date('2024-10-14T14:30:00').toISOString(),
        photos: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400']
      },
      {
        id: 'expense-2',
        tripId: 'trip-1',
        amount: 58,
        currency: 'CNY',
        category: 'food',
        description: '%Arabica 咖啡',
        note: '阳光穿过庭院，拿铁入口是秋天的味道 ☕️',
        location: '%Arabica 嵐山店, 京都',
        mood: 'calm',
        moodScore: 8.2,
        timestamp: new Date('2024-10-14T10:12:00').toISOString(),
        photos: ['https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400']
      },
      {
        id: 'expense-3',
        tripId: 'trip-1',
        amount: 268,
        currency: 'CNY',
        category: 'food',
        description: '寿司 · 鮨一幸',
        note: '海风的咸味和金枪鱼的油脂刚刚好',
        location: '鮨一幸, 岚山',
        mood: 'calm',
        moodScore: 8.8,
        timestamp: new Date('2024-10-14T13:05:00').toISOString(),
        photos: ['https://images.unsplash.com/photo-1558980664-10a5a1baff54?w=400']
      },
      {
        id: 'expense-4',
        tripId: 'trip-1',
        amount: 200,
        currency: 'CNY',
        category: 'shopping',
        description: '纪念品 · 手作和扇',
        note: '风在扇骨之间穿行，像把今天装了进去',
        location: '清水寺, 京都',
        mood: 'excited',
        moodScore: 9.2,
        timestamp: new Date('2024-10-14T18:42:00').toISOString(),
        photos: []
      },
      {
        id: 'expense-5',
        tripId: 'trip-1',
        amount: 120,
        currency: 'CNY',
        category: 'transport',
        description: 'JR 岚山线',
        note: '坐在窗边看风景，每一帧都是明信片',
        location: 'JR 岚山站',
        mood: 'peace',
        moodScore: 8.5,
        timestamp: new Date('2024-10-14T09:30:00').toISOString(),
        photos: []
      },
      {
        id: 'expense-6',
        tripId: 'trip-1',
        amount: 800,
        currency: 'CNY',
        category: 'accommodation',
        description: '传统日式旅馆',
        note: '榻榻米上的夜晚，听着雨声入睡',
        location: '岚山温泉旅馆',
        mood: 'peace',
        moodScore: 9.0,
        timestamp: new Date('2024-10-14T20:00:00').toISOString(),
        photos: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400']
      },
      {
        id: 'expense-7',
        tripId: 'trip-1',
        amount: 45,
        currency: 'CNY',
        category: 'food',
        description: '抹茶冰淇淋',
        note: '京都的抹茶，每一口都是春天的味道',
        location: '茶寮都路里',
        mood: 'joy',
        moodScore: 8.7,
        timestamp: new Date('2024-10-15T15:20:00').toISOString(),
        photos: ['https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400']
      },
      {
        id: 'expense-8',
        tripId: 'trip-1',
        amount: 350,
        currency: 'CNY',
        category: 'attraction',
        description: '金阁寺门票',
        note: '金光闪闪的寺庙，倒映在湖水中美得不像话',
        location: '金阁寺',
        mood: 'wonder',
        moodScore: 9.3,
        timestamp: new Date('2024-10-15T11:00:00').toISOString(),
        photos: ['https://images.unsplash.com/photo-1542640244-a10b6e5d1e2a?w=400']
      },
      // 首尔旅行的记录
      {
        id: 'expense-9',
        tripId: 'trip-2',
        amount: 180,
        currency: 'CNY',
        category: 'food',
        description: '韩式烤肉',
        note: '滋滋作响的烤肉声，配着烧酒，这就是韩国的味道',
        location: '明洞烤肉店',
        mood: 'excited',
        moodScore: 8.9,
        timestamp: new Date('2024-09-21T19:30:00').toISOString(),
        photos: ['https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400']
      },
      {
        id: 'expense-10',
        tripId: 'trip-2',
        amount: 450,
        currency: 'CNY',
        category: 'shopping',
        description: 'K-Beauty 化妆品',
        note: '在Olive Young买了一大堆面膜，韩国的美妆真的太好用了',
        location: '明洞 Olive Young',
        mood: 'happy',
        moodScore: 8.6,
        timestamp: new Date('2024-09-22T14:15:00').toISOString(),
        photos: []
      }
    ];

    this.trips = sampleTrips;
    this.expenses = sampleExpenses;
    this.saveData();
  }

  // 创建新旅行
  createTrip(tripData) {
    const newTrip = {
      id: `trip-${Date.now()}`,
      ...tripData,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    this.trips.push(newTrip);
    this.currentTrip = newTrip;
    this.saveData();
    return newTrip;
  }

  // 添加消费记录
  addExpense(expenseData) {
    const newExpense = {
      id: `expense-${Date.now()}`,
      tripId: this.currentTrip.id,
      timestamp: new Date().toISOString(),
      ...expenseData
    };
    
    this.expenses.push(newExpense);
    this.saveData();
    return newExpense;
  }

  // 获取当前旅行的消费记录
  getCurrentTripExpenses() {
    if (!this.currentTrip) return [];
    return this.expenses.filter(expense => expense.tripId === this.currentTrip.id);
  }

  // 获取统计数据
  getStats(tripId = null) {
    const targetTripId = tripId || this.currentTrip?.id;
    const tripExpenses = this.expenses.filter(expense => expense.tripId === targetTripId);
    
    if (tripExpenses.length === 0) {
      return {
        totalAmount: 0,
        categoryBreakdown: {},
        moodAverage: 0,
        dailySpending: {},
        topExpense: null,
        moodTrend: []
      };
    }

    // 计算总金额
    const totalAmount = tripExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    // 分类统计
    const categoryBreakdown = {};
    tripExpenses.forEach(expense => {
      categoryBreakdown[expense.category] = (categoryBreakdown[expense.category] || 0) + expense.amount;
    });

    // 心情平均值
    const moodAverage = tripExpenses.reduce((sum, expense) => sum + expense.moodScore, 0) / tripExpenses.length;

    // 每日消费
    const dailySpending = {};
    tripExpenses.forEach(expense => {
      const date = new Date(expense.timestamp).toDateString();
      dailySpending[date] = (dailySpending[date] || 0) + expense.amount;
    });

    // 最高消费
    const topExpense = tripExpenses.reduce((max, expense) => 
      expense.amount > max.amount ? expense : max, tripExpenses[0]);

    // 心情趋势
    const moodTrend = tripExpenses
      .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
      .map(expense => ({
        timestamp: expense.timestamp,
        mood: expense.mood,
        score: expense.moodScore
      }));

    return {
      totalAmount,
      categoryBreakdown,
      moodAverage,
      dailySpending,
      topExpense,
      moodTrend,
      expenseCount: tripExpenses.length
    };
  }

  // 生成AI报告
  generateAIReport(tripId = null) {
    const targetTripId = tripId || this.currentTrip?.id;
    const trip = this.trips.find(t => t.id === targetTripId);
    const stats = this.getStats(targetTripId);
    const expenses = this.expenses.filter(expense => expense.tripId === targetTripId);

    if (!trip || expenses.length === 0) {
      return null;
    }

    // 分析消费模式
    const topCategory = Object.entries(stats.categoryBreakdown)
      .sort(([,a], [,b]) => b - a)[0];
    
    const moodAnalysis = this.analyzeMood(expenses);
    const spendingAnalysis = this.analyzeSpending(expenses, trip.budget);
    const highlights = this.generateHighlights(expenses);

    return {
      trip,
      summary: {
        totalDays: this.calculateDays(trip.startDate, trip.endDate),
        totalAmount: stats.totalAmount,
        budgetUsed: (stats.totalAmount / trip.budget * 100).toFixed(1),
        averageDaily: (stats.totalAmount / this.calculateDays(trip.startDate, trip.endDate)).toFixed(0),
        expenseCount: stats.expenseCount
      },
      insights: {
        topCategory: topCategory ? { name: topCategory[0], amount: topCategory[1] } : null,
        moodAverage: stats.moodAverage.toFixed(1),
        moodAnalysis,
        spendingAnalysis,
        highlights
      },
      recommendations: this.generateRecommendations(stats, trip),
      generatedAt: new Date().toISOString()
    };
  }

  // 分析心情
  analyzeMood(expenses) {
    const moodCounts = {};
    expenses.forEach(expense => {
      moodCounts[expense.mood] = (moodCounts[expense.mood] || 0) + 1;
    });
    
    const dominantMood = Object.entries(moodCounts)
      .sort(([,a], [,b]) => b - a)[0];
    
    return {
      dominant: dominantMood ? dominantMood[0] : 'neutral',
      distribution: moodCounts
    };
  }

  // 分析消费
  analyzeSpending(expenses, budget) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const budgetUsed = (total / budget * 100).toFixed(1);
    
    let analysis = '';
    if (budgetUsed < 70) {
      analysis = '你很会控制预算！';
    } else if (budgetUsed < 90) {
      analysis = '预算控制得不错';
    } else if (budgetUsed < 110) {
      analysis = '预算使用合理';
    } else {
      analysis = '超预算了，下次要注意';
    }
    
    return {
      budgetUsed: parseFloat(budgetUsed),
      analysis
    };
  }

  // 生成亮点
  generateHighlights(expenses) {
    const topExpense = expenses.reduce((max, expense) => 
      expense.amount > max.amount ? expense : max, expenses[0]);
    
    const happiestMoment = expenses.reduce((max, expense) => 
      expense.moodScore > max.moodScore ? expense : max, expenses[0]);
    
    const mostExpensiveDay = this.getMostExpensiveDay(expenses);
    
    return {
      topExpense,
      happiestMoment,
      mostExpensiveDay
    };
  }

  // 获取最贵的一天
  getMostExpensiveDay(expenses) {
    const dailyTotals = {};
    expenses.forEach(expense => {
      const date = new Date(expense.timestamp).toDateString();
      dailyTotals[date] = (dailyTotals[date] || 0) + expense.amount;
    });
    
    const mostExpensive = Object.entries(dailyTotals)
      .sort(([,a], [,b]) => b - a)[0];
    
    return {
      date: mostExpensive[0],
      amount: mostExpensive[1]
    };
  }

  // 生成建议
  generateRecommendations(stats, trip) {
    const recommendations = [];
    
    // 预算建议
    const budgetUsed = (stats.totalAmount / trip.budget * 100).toFixed(1);
    if (budgetUsed > 100) {
      recommendations.push({
        type: 'budget',
        title: '预算管理',
        content: '本次旅行超预算了，建议下次提前规划消费类别'
      });
    }
    
    // 心情建议
    if (stats.moodAverage < 7) {
      recommendations.push({
        type: 'mood',
        title: '心情优化',
        content: '整体心情指数偏低，建议多安排放松的活动'
      });
    }
    
    // 消费建议
    const topCategory = Object.entries(stats.categoryBreakdown)
      .sort(([,a], [,b]) => b - a)[0];
    if (topCategory && topCategory[1] > stats.totalAmount * 0.5) {
      recommendations.push({
        type: 'spending',
        title: '消费平衡',
        content: `${topCategory[0]}类消费占比过高，建议多样化消费`
      });
    }
    
    return recommendations;
  }

  // 计算天数
  calculateDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  }

  // 保存数据到本地存储
  saveData() {
    try {
      localStorage.setItem('travelHappy_trips', JSON.stringify(this.trips));
      localStorage.setItem('travelHappy_expenses', JSON.stringify(this.expenses));
      localStorage.setItem('travelHappy_currentTrip', JSON.stringify(this.currentTrip));
    } catch (error) {
      console.error('保存数据失败:', error);
    }
  }

  // 从本地存储加载数据
  loadTrips() {
    try {
      const data = localStorage.getItem('travelHappy_trips');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('加载旅行数据失败:', error);
      return [];
    }
  }

  loadExpenses() {
    try {
      const data = localStorage.getItem('travelHappy_expenses');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('加载消费数据失败:', error);
      return [];
    }
  }

  // 获取当前旅行
  getCurrentTrip() {
    return this.currentTrip;
  }

  // 设置当前旅行
  setCurrentTrip(tripId) {
    this.currentTrip = this.trips.find(trip => trip.id === tripId);
    this.saveData();
    return this.currentTrip;
  }

  // 获取所有旅行
  getAllTrips() {
    return this.trips;
  }

  // 删除旅行
  deleteTrip(tripId) {
    this.trips = this.trips.filter(trip => trip.id !== tripId);
    this.expenses = this.expenses.filter(expense => expense.tripId !== tripId);
    
    if (this.currentTrip && this.currentTrip.id === tripId) {
      this.currentTrip = this.trips.length > 0 ? this.trips[0] : null;
    }
    
    this.saveData();
  }
}

// 创建全局实例
window.travelData = new TravelDataManager();

