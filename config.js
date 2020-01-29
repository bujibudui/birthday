// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的倩倩小可爱", // 同上...
        "我",
        "遇到你",
        "是很幸运的一件事",
        "感谢相遇",
        "hahahaha",
        "今天是你的生日",
        "这是我们相遇以后",
        "你的第1个生日了",
        "希望以后的生日都能陪你一起度过",
        "还记得以前我给你说的上海那个好吃的餐厅吗",
        "希望今年可以一起去",
        "给你最大的碗，盛最多的饭",
        "哈哈哈，我就少吃点",
        "欧耶！（心机boy的内心）",
        "心爱的倩倩，生日快乐",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"送给我": "./imgs/qianbaoer.png",//这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        //"心爱的倩倩小可爱": "./imgs/qianbaoer.png",// 同上...
        "我": "./imgs/1.png",
        "遇到你": "./imgs/2.png",
        "是很幸运的一件事": "./imgs/4.png",
        "感谢相遇": "./imgs/5.png",
        "hahahaha": "./imgs/3.png",
        //"今天是你的生日": "./imgs/qianbaoer.png",
        //"这是我们相遇以后": "./imgs/qianbaoer.png",
        //"你的第1个生日了": "./imgs/qianbaoer.png",
        //"希望以后的生日都能陪你一起度过": "./imgs/qianbaoer.png",
        //"还记得以前我给你说的上海那个好吃的餐厅吗": "./imgs/qianbaoer.png",  
        //"希望今年可以一起去": "./imgs/qianbaoer.png",
        //"给你最大的碗，盛最多的饭": "./imgs/qianbaoer.png",
        //"哈哈哈，我就少吃点": "./imgs/qianbaoer.png",
        //"欧耶！（心机boy的内心）": "./imgs/qianbaoer.png",
        "心爱的倩倩,生日快乐": "./imgs/qianbaoer.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
