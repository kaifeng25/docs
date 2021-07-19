module.exports = {
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/img/favicon.ico'
        }]
    ],
    title: 'Kaite',
    description: 'kaifeng的小站',
    dest: './dist',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: '跟新时间',
        logo: '/assets/img/hero.png',
        //   navbar:false,
        displayAllHeaders: true, // 默认值：false
        nav: require("./nav"),
        sidebar: require("./sidebar"),
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
    }
}
// 备案 浙ICP备2021000610号