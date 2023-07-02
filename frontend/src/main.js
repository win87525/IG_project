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
                    url: "husky",
                    name: "哈士奇",
                    nickName: "小哈",
                    phone: "0911222333",
                    text: "新髮色配新圍巾🧣 好看嗎!?\n#圍巾 #綠色",
                    introduce: "專業拆家\n喜歡吃肉肉🍖🍗🥩\n熱愛四處亂跑🏃🏻🏃🏻‍♀️\n喜歡玩雪球❄️",
                    img: "/src/assets/HomePage/1.jpeg",
                    email: "husky@gmail.com",
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
                    url: "beagle",
                    name: "米格魯",
                    nickName: "小米",
                    phone: "0922334455",
                    text: "爸爸準備的躺椅，還能在上面玩球球🥎\n#躺椅 #網球",
                    introduce: "專業跳舞💃🏻\n喜歡吃點心🍦🍩\n熱愛唱歌🎵\n喜歡玩遊戲🥎",
                    img: "/src/assets/HomePage/2.jpg",
                    email: "beagle@gmail.com",
                    time: "17分鐘前",
                    like: "182",
                    comment: "6",
                    favorite: "57",
                    isLike: true,
                    isFavorite: true,
                },
                {
                    id: 3,
                    url: "frise",
                    name: "比熊犬",
                    nickName: "小比",
                    phone: "0945678912",
                    text: "又是出門遛媽媽的一天🌞\n#興奮到模糊",
                    introduce: "喜歡散步👩‍🦯\n喜歡游泳🤿🏊🏻‍♂\n喜歡跟媽媽去美髮💈💇‍♀️\n熱愛探索新事物🌞",
                    img: "/src/assets/HomePage/3.jpg",
                    email: "frise@gmail.com",
                    time: "31分鐘前",
                    like: "412",
                    comment: "7",
                    favorite: "57",
                    isLike: false,
                    isFavorite: true,
                },
                {
                    id: 4,
                    url: "bulldog",
                    name: "鬥牛犬",
                    nickName: "小牛",
                    phone: "0911222333",
                    text: "冬天就是要玩雪❄️\n#堆雪人 #滑冰",
                    introduce: "喜歡散步👨‍🦯👩‍🦯\n喜歡追逐球⚽️\n喜歡與其他狗狗玩耍🐕🐩‍\n熱愛探索新事物🐾",
                    img: "/src/assets/HomePage/4.jpg",
                    email: "bulldog@gmail.com",
                    time: "49分鐘前",
                    like: "422",
                    comment: "2",
                    favorite: "36",
                    isLike: true,
                    isFavorite: false,
                },
                {
                    id: 5,
                    url: "dachshund",
                    name: "臘腸犬",
                    nickName: "小臘",
                    phone: "0977125468",
                    text: "準備上飛機囉✈️，猜猜我去哪?\n#出國",
                    introduce: "喜歡挖洞🕳️\n喜歡觀察小動物🐛🐌\n喜歡探索狹小空間\n熱愛探險冒險🐾",
                    img: "/src/assets/HomePage/5.jpg",
                    email: "dachshund@gmail.com",
                    time: "1小時前",
                    like: "342",
                    comment: "3",
                    favorite: "17",
                    isLike: false,
                    isFavorite: true,
                },
                {
                    id: 6,
                    url: "akita",
                    name: "秋田犬",
                    nickName: "小秋",
                    phone: "0955123456",
                    text: "你看我像不像獅子王🦁️!?\n#獅子王 #狗界辛巴",
                    introduce: "最愛吃肉肉🍖\n熱愛美髮、造型💈✂️\n興趣是跟爸爸玩飛盤🥏",
                    img: "/src/assets/HomePage/6.jpg",
                    email: "akita@gmail.com",
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
                    nickName: "阿寬",
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
