const BlogMockData=[
    {
        key:1,
        img:'/imgs/nextjs.png',
        title:"Creating A Multi-Author Blog With Next.js",
        author:"XYZ",
        content:"In case you are not familiar with it yet, Next.JS is a popular React framework. This framework allows you to build React applications capable of static site generation and server-side rendering with no configuration required.The major benefit of using static site generation or server-side rendering is that it is much better for Search Engine Optimization and you’ll notice the initial page load is much faster than a typical React application. With server-side generation, you have the option of pulling data directly from your data source before the page is rendered and sent to the client rather than fetching from an API.But rather than going through a long explanation of the benefits of Next.JS let’s instead build an example application to demonstrate how it can be used to build your own personal blog site.For this article, I will assume you are already familiar with JavaScript and React which you will need a solid understanding of to get the most out of this.",
        createdAt:new Date().toDateString()
    },
    {
        key:2,
        img:'/imgs/blog1.jpg',
        title:"ArcMenu GNOME Extension Adds New Windows 11 Layout",
        author:"XYZ",
        content:"A new version of the ArcMenu GNOME extension is available for download, and it’ll be of particular interest to those who want to make Ubuntu look like Windows 11.The latest update to Arc Menu includes a pair of new menu layouts: ‘Launcher’ and ‘Eleven’. The latter of these is inspired by the redesigned ‘Start Menu’ set to ship in Windows 11 when released later this year.As you can see in the hero screenshot, it’s not a 1:1 clone. As a shell extension ArcMenu inherits whatever GNOME Shell theme you’re using, so if you want an über Windows-y look you’ll need to install a Windows GNOME Shell theme too.A smattering of changes to preexisting layouts also ship in this update, including new names for the Unity-inspired ‘Dash’ and ‘KRunner’ options, plus some tweaks to the Windows layout to toggle Frequent Apps and Pinned Apps.There’s also a redesigned menu layouts section. This makes browsing, previewing, and picking menu layouts more intuitive. A few sections within the settings panel have been renamed and re-ordered to be more user friendly.ArcMenu also lets users reorder the power options, adds new ‘Hybrid Sleep’ and ‘Hibernate’ toggles, gains an option to disable scroll view fade effects, and adds drag-and-drop reordering for Pinned Apps on all layouts.A quick recap for those unaware: the original developer of ArcMenu stepped away from the project around the time of the v48 release. The extension transitioned to a new set of developers. This is why the version number is now a lower value than in earlier articles about the add-on.",
        createdAt:new Date().toDateString()
    },
    {
        key:3,
        img:'/imgs/blog2.jpg',
        title:"The ‘Hey Dude, Where Can I Get That Wallpaper?’ Blog Post",
        author:"XYZ",
        content:"If you’ve been lusting after the colourful desktop wallpapers I’ve been using in screenshots for articles and tweets during the past month or so, this post is for you.Quite a few of you have reached out to ask me for a link to the wallpapers you’ve glimpsed in a screenshot. You’ve also asked me where I get my wallpapers from. Rather than continuing to reply individually I figured I’d throw a quick post up here to share, and maybe reach those who did wonder but were too afraid to ask.Plus, a post on wallpapers gives me a chance to poke a bit of fun at Ubuntu 21.04 and its ‘unique’ desktop wallpaper: Since the unveiling, the Ubuntu 21.04 default wallpaper has split opinion. Some see a playful hippo outline, an innocuous bit of mascot art, a little bit of fun. Others? Well, they see a pair of hairy… Let’s just call them coconuts! 🥥In light of the (mostly humorous) hostility that the hirsute’s hallowed form has endured I figure more people than usual may be looking for an alternative desktop background 😉 – another reason to put out a quick post like this.Ubuntu 21.04 offers just two alternative wallpapers to its contentious default canvas, both of which are also pictures of hippos. Now, I like hippos as much as the next person, but a bit of variety in the ol’ desktop background department would’ve been appreciated, ‘Buntz.The recently-revived Ubuntu 21.10 wallpaper contest is now underway, and will ensure the next release ships with a slightly more diverse set of images out of the box. But only slightly; developers plan to select only TWO winners for inclusion on the .iso. They say it’s save room on the disc image… 💁🏻‍♂️Still, whichever version you use, you can change Ubuntu’s desktop background to (virtually) any image file you like.",
        createdAt:new Date().toDateString()
    }
]

export default BlogMockData