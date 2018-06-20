const state = {
    subjectShow:false,
    initialShow:false,
    resultShow:false,
    answerShow:false,

    isLoginedIn: false,
    realTimePolicy: [],
    matchedPolicy: [],
    subjects: [],
    commitDate:{},
    subjectIndex: 0,
    modifySubject:{},
    isModify:false,
    isFinished:false,
    isTesting:false,
    isNeedSave:false,
    isCached:false,
    isInnerPage:false,
    isCancelToAnswer:false
};

// getters
const getters = {
    matchedLength: state => state.matchedPolicy.length,//匹配政策条数
    curSubject: state => state.subjects[state.subjectIndex] || {selChain:{}, children: []},//当前题目对象
    subjectIndex: state => state.subjectIndex,//单前题目下标
};

// actions
const actions = {

};

// mutations
const mutations = {
    //设施模块显示状态
    setSubjectShowStatus(state,status) {
        state.subjectShow = status;
    },
    setInitialShowStatus(state,status) {
        state.initialShow = status;
    },
    setResultShowStatus(state,status) {
        state.resultShow = status;
    },
    setAnswerShowStatus(state,status) {
        state.answerShow = status;
    },
    //重设状态值
    resetTestState(state) {
        state.subjectShow = false;
        state.initialShow = false;
        state.resultShow = false;
        state.answerShow = false;
        state.isLoginedIn = false;
        state.realTimePolicy = [];
        state.matchedPolicy = [];
        state.subjects = [];
        state.commitDate = {};
        state.modifySubject = {};
        state.subjectIndex = 0;
        state.isModify = false;
        state.isFinished = false;
        state.isTesting = false;
        state.isNeedSave = false;
        state.isCached = false;
        state.isInnerPage = false;
        state.isCancelToAnswer = false;
    },
    // 重设当前题目下标
    setSubjectIndex(state ,curIndex) {
        state.subjectIndex = curIndex;
    },

    // 重设修改题目
    setModifySubject(state, subject) {
        state.modifySubject = subject;
    },
    // 重设题目状态
    setModifyStatus(state, status) {
        state.isModify = status;
    },
    // 重设答题状态
    setFinishedStatus(state, status) {
        state.isFinished = status;
    },
    // 重设测评页面
    setTestStatus(state, status) {
        state.isTesting = status;
    },
    // 重设登录状态
    setLoginStatus(state, status) {
        state.isLoginedIn = status;
    },
    // 设置是否需要保存记录
    setSaveStatus(state, status) {
        state.isNeedSave = status;
    },
    // 设置是否缓存 （再次激活不刷新页面）
    setCachedStatus(state, status) {
        state.isCached = status;
    },
    // 设置是否为内部页面
    setInnerPageStatus(state, status) {
        state.isInnerPage = status;
    },
    // 设置是否为内部页面
    setCancelToAnswer(state, status) {
        state.isCancelToAnswer = status;
    },

    // 设置提交数据
    setCommitDate(state, commitDate) {
        state.commitDate = commitDate;
    },

    //设置实时匹配政策
    setRealTimePolicy(state, realTimePolicys) {
        state.realTimePolicy = realTimePolicys;
    },
    //设置实时匹配政策(100%)
    setMatchedPolicy(state, matchedPolicy) {
        state.matchedPolicy = matchedPolicy;
    },
    //设置题目
    setSubjects(state, subjects) {
        state.subjects = subjects;
    },
    //设置题目长度
    setSubjectsLength(state, len) {
        state.subjects.length = len;
        state.subjects = [...state.subjects];
    },
    //添加题目
    pushSubjects(state, subject) {
        state.subjects.push(subject);
        state.subjects = [...state.subjects];
    },
    //更改当前题目
    changeCurSubjuect(state, subjuect) {
        state.subjects[state.subjectIndex] = subjuect;
        state.subjects = [...state.subjects];
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
