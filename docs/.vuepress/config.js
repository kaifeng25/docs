module.exports = {
    head: [
        ['link', {rel: 'icon',href:'/favicon.ico'} ]
    ],
    themeConfig: {
      lastUpdated: '跟新时间',
      logo: '/assets/img/hero.png',
    //   navbar:false,
      displayAllHeaders: true, // 默认值：false
      sidebar: 'auto',
      
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'External', link: 'https://baidu.com' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
      ],
     
    
      
    }
  }