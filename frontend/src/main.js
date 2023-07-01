import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import { createStore } from "vuex";



const store = createStore({
    state() {
        return {
            items: [
                {
                    id: 1,
                    url:"afghan",
                    name: "雪兒",
                    nickName:"小雪",
                    phone:"0911222333",
                    text: "喜歡這組照片的風格，你呢?",
                    introduce: "貴賓犬\n喜歡吃飼料 \n熱愛美髮、造型\n喜歡玩傳接球",
                    img: "/src/assets/HomePage/1.jpeg",
                    email:"abc123@gmail.com",
                    website: "",
                    time: "10分鐘前",
                    like: "482",
                    comment: "8",
                    favorite: "41",
                    isLike: true,
                    isFavorite: false,
                },
                {
                    id: 2,
                    url:"basset",
                    name: "思婷",
                    text: "留意生活中的那些小角落 #花兒",
                    img: "/src/assets/HomePage/2.jpg",
                    time: "17分鐘前",
                    like: "182",
                    comment: "6",
                    favorite: "57",
                    isLike: true,
                    isFavorite: true,
                },
                {
                    id: 3,
                    url:"english",
                    name: "雨樹",
                    text: "想不想知道我在看什麼?",
                    img: "/src/assets/HomePage/3.jpg",
                    time: "31分鐘前",
                    like: "412",
                    comment: "7",
                    favorite: "57",
                    isLike: false,
                    isFavorite: true,
                },
                {
                    id: 4,
                    url:"ibizan",
                    name: "王美",
                    text: "每到夏天我要去海邊!",
                    img: "/src/assets/HomePage/4.jpg",
                    time: "49分鐘前",
                    like: "422",
                    comment: "2",
                    favorite: "36",
                    isLike: true,
                    isFavorite: false,
                },
                {
                    id: 5,
                    url:"plott",
                    name: "雲飛",
                    text: "放下那些種種，用心生活。",
                    img: "/src/assets/HomePage/5.jpg",
                    time: "1小時前",
                    like: "342",
                    comment: "3",
                    favorite: "17",
                    isLike: false,
                    isFavorite: true,
                },
                {
                    id: 6,
                    url:"walker",
                    name: "王超",
                    text: "喜歡那些與朋友們相聚的時刻 #野餐",
                    img: "/src/assets/HomePage/6.jpg",
                    time: "2小時前",
                    like: "482",
                    comment: "5",
                    favorite: "37",
                    isLike: true,
                    isFavorite: true,
                },
            ],
            user: [
                {
                    userName: "陳寬鴻",
                    nickName: "阿鴻",
                    email: "win87525@gmail.com",
                    introduce: "90後設計師🧑‍🎨\n畢業於實踐大學🎓 \n熱情活潑 熱愛分享\n喜愛籃球🏀 羽球🏸️",
                    website: "#喜愛與人交流 #活潑 #幽默 #開朗",
                    phone: "0937524519",
                }
            ],
            showPostUpload: false,

        };
    },
    mutations: {
        Like(state, id) {
            const item = state.items.find(item => item.id === id);
            if (item) {
                if (item.isLike) {
                    item.isLike = false;
                    item.like--;
                } else {
                    item.isLike = true;
                    item.like++;
                }
            }
        },
        favorite(state, id) {
            const item = state.items.find(item => item.id === id);
            if (item) {
                if (item.isFavorite) {
                    item.isFavorite = false;
                    item.favorite--;
                } else {
                    item.isFavorite = true;
                    item.favorite++;
                }
            }
        },
        //用來做貼文上傳切換窗
        showPostUpload(state) {
            state.showPostUpload = !state.showPostUpload
        },
        // 觸發更新值
        updateUserName(state, value) {
            state.user[0].userName = value;
        },
        updateNickName(state, value) {
            state.user[0].nickName = value;
        },
        updateEmail(state, value) {
            state.user[0].email = value;
        },
        updateIntroduce(state, value) {
            state.user[0].introduce = value;
        },
        updateWebsite(state, value) {
            state.user[0].website = value;
        },
        updatePhone(state, value) {
            state.user[0].phone = value;
        },
    },
    getters: {
        getItemById: (state) => (userId) => {
            return state.items.find((item) => item.id === parseInt(userId));
        },
    }
});



const app = createApp(App);
app.use(store)
app.use(router);

app.mount("#app");
