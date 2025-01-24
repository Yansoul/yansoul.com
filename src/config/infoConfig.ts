export const name = '研硕'
export const headline = '产品、设计、开发'
export const introduction = '00 后产品经理，偶尔写点代码，创业中'
export const email = 'l1150001740@gmail.com'
export const githubUsername = 'yansoul'

// about page
export const aboutMeHeadline = '我是研硕，base 北京，创业中'
export const aboutParagraphs = [
  // "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 18.",
  // "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  // "I'm working as a software develop engineer in Shenzhen, China now. And I'm building a lot of side projects in my spare time."
]

// projects
export const projectHeadLine = '做过的产品'
export const projectIntro = '凡为过往，皆为序章'

// blog
export const blogHeadLine = '思维碎片'
export const blogIntro = 'Connect the dots.'

// changelog
export const changelogHeadLine = "What's new about this site"
export const changelogIntro = 'Check out the latest changes to this site.'

// friends
export const friendsHeadLine = "yanshuo's friends"
export const friendsIntro = 'Meet some interesting friends.'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/liuzhengyanshuo',
  },
  {
    name: 'Jike',
    icon: 'jike',
    href: 'https://okjk.co/1FmJzC',
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/yansoul',
  },
]

// education
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: '江苏科技大学',
    major: '计算机科学与技术',
    logo: 'college',
    start: '2019',
    end: '2023',
  },
]

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: '原则科技',
    title: '产品',
    logo: 'lusun',
    start: '2024.4',
    end: 'Present',
  },
  {
    company: 'Testin',
    title: '产品经理',
    logo: 'testin',
    start: '2022.7',
    end: '2024.3',
  },
]

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: '实况喵',
    description: '定格瞬间，留住生动 —— 静态图一键转 Live Photo，让你的照片动起来。',
    link: { href: 'apps.apple.com/cn/app/%E5%AE%9E%E5%86%B5%E5%96%B5-%E9%9D%99%E6%80%81%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90live%E5%9B%BE/id6739980277', label: '实况喵' },
    logo: '/livemiaow.png',
    category: ['App'],
    techStack: ['Swift'],
    tags: ['Live Photo', 'Entertainment'], 
  },
  {
    name: '白瓜面试',
    description: '再也不想背八股了',
    link: { href: 'm.baigua.com', label: '白瓜面试' },
    logo: 'https://m.baigua.com/favicon.ico',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI', 'Electron'],
    tags: ['Teleprompter', 'Efficiency'],
  },
  {
    name: 'FlowPrompter',
    description:
      'A transparent online teleprompter that helps you deliver smoother performances on camera.',
    link: { href: 'flowprompter.app', label: 'FlowPrompter' },
    logo: 'https://flowprompter.app/favicon.ico',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS'],
    tags: ['Teleprompter', 'Efficiency'],
  },
]

export const githubProjects: Array<ProjectItemType> = [
  /*   {
    name: 'Devtoolset',
    description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
    link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
    gitStars: 146,
    gitForks: 47
  }, */
]

// changelog
export type ChangelogItemType = {
  date: string
  content: [
    {
      title: string
      description: string
    },
  ]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2025-01-04',
    content: [
      {
        title: '🔨 更新',
        description: '添加公司 Logo，友链以及微信',
      },
    ],
  },
  {
    date: '2024-12-17',
    content: [
      {
        title: '💡 发布',
        description: '"先上线再说"',
      },
    ],
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]

// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string; label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: '高正阳',
    link: { href: 'https://gzy.dingdangdream.com/' },
  },
]
