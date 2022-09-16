const hooks = [
`How to make {thing} {positive outcome} in {exact time}.`,
`This might be the best way to...`,
`3 mistakes you might be making that... [insert negative result]`,
`Here are my real thoughts about...[insert something important or trending]`,
`Why [something] isn't working anymore`,
`Why [something] isn't enough`,
`Why your [insert method or tool] isn't working`,
`This might be one of the most important posts I've ever made (don't use this one a lot)`,
`I studied the top [insert method, tool or person type] and here's what I found`,
`I studied [insert number] of the best [insert method, tool or person type] and here's what I found`,
`The #1 thing you want to try if you want to [insert desired result]`,
`Here's how I... and how you can too`,
`How I finally... and how you can too`,
`If you're having trouble... I'm going to show you how to...`,
`3 Ways to quickly... [insert desired result]`,
`3 Easy ways to... [insert desired result]`,
`How to stop [insert negative problem]`,
`The quickest way to... [insert desired result]`,
`The best way to... [insert desired result]`,
`You'll want to know the best hack for... [insert desired result]`,
`You want to know this hack for... [insert desired result]`,
`If you want to...[insert desired result], then here's what to do`,
`If you're ready to...[insert desired result], then listen up`,
`3 simple ways to...[insert desired result] without [insert negative thing people want to avoid]`,
`How to...[insert desired result] without [insert negative thing people want to avoid]`,
`3 ways you know you're/you'll [insert desired result]`,
`You're going to want to know this crazy hack to...[insert desired result]`,
`If you want to be able to [insert desired result], then you'll want to follow these steps`,
`How to... [insert desired result] in 3 easy steps`,
`You might not like what I'm about to say`,
`3 reasons why... isn't working`,
`I'm about to tell you the truth about...`,
`Here's what...[insert person type, industry or organization] doesn't want you to know`,
`You might not like it, but you need to know the truth...`,
`Why you could be losing [insert something important] by [insert doing this activity]`,
`You might not like it, but [insert something people rely on] is changing. Here's what you need to know.`,
`You're being lied to (use this one with caution and don't name names)`,
`You said that if I did [this], I would get [that]. Here's the truth about [that]`,
`There's a lot of misinformation out there about [insert topic].`,
`I might get a lot of flack for this, but here goes... [insert controversial or surprising statement]`,
`People might not like what I'm about to say, but you need to hear it [insert controversial or surprising statement]`,
`So many people get this wrong... here's the truth about [insert topic]`,
`You shouldn't have to deal with [insert problem] in 2021. Here's what you can do about It.`,
`Did you know there's actually an easier way to...[insert desired result]`,
`Did you know most people don't know the best way to...[insert desired result]`,
`Things are not looking so good for... [insert person type, business or industry]. Here's what you need to know`,
`Crazy things are happening in the... [insert business, niche or industry] world. Here's what you need to know`,
`So you... [insert negative result or problem]? Here's what you can do about it.`,
`So you... [insert negative result or problem]? Here a 3 things you can do to fix it`,
`One of the best pieces of advice I ever heard/got was to [insert advice]. Here's how it change my life`,
`It breaks my heart when I see people... [insert negative result or problem]. Here's how to avoid it`,
`Stop doing [insert activity] to [insert desired result]. It doesn't work. Here's what to do instead.`,
`How the best [insert person type] are successfully/consistently [insert desired result or activity]`,
`The 3 best ways to consistently... [insert desired result or activity]`,
`Many people are experiencing...[insert negative result or problem]. Here's how you can avoid it`,
`We've all done it. [insert negative result, activity or problem]. But here's how to avoid it`,
`There's nothing wrong with you. We all experience...[insert negative result or problem]. Here's how you can fix it.`,
`If you're experiencing...[insert negative result or problem], it's probably not your fault. Here's what you need to know...`,
`I wasn't sure if I should share this, but here goes... [insert news or secret hack]`,
`I can't believe I'm about to share this... but here is the best way to [insert desired result].`,
`I can't believe I'm telling you this... but here's how I [insert desired result].`,
`I don't know about you, but I'm always looking for the best ways to...[insert desired result]. Here are 3 ways you can start [insert desired result] today`,
`3 ways you can start... [insert desired result] today`,
`3 things you must know if you want to...[insert desired result]`,
`3 things I wish I knew about... [insert topic] before I started`,
`You don't have to... [insert negative result or problem]. Here's what to do instead`,
`How 1 piece of advice changed my life.`,
`3 things you might not have known you can do with... [insert tool or platform]`,
`Most people don't know this secret hack for...[insert desired result]`,
`Most people don't know the most important step to...[insert desired result]`,
`It's finally here! [insert announcement or something exciting]`,
`We've all been waiting way too long. It's finally here! [insert announcement or something exciting]`,
`We've been asking for this for a while, and it's finally here [insert announcement or something exciting]`,
`You may have been wondering: How do I [insert desire]? Let me show you,`,
`The secrets to.. [insert desire] are being uncovered`,
`You're about to hear the secrets to.. [insert desire]`,
`The best kept secret to.. [insert desire] is finally being revealed`,
`3 things "they" don't want you to know about... [insert desire or industry]`,
`I followed the best advice about... [insert topic] Here's what I found...`,
`Have you heard about...? Here's what you need to know.`,
`If you haven't heard about... you're going to want to listen up.`,
`By now, you probably know that... Here's the inside scoop.`,
`You might have heard... Here's what you want to know.`,
`Are You Making This Common Mistake With X?`,
`3 Examples You Can Apply Immediately To Do X.`,
`The Step-By-Step Guide To X.`,
`How To X.`,
`Going through X and wanna cry? Here are 3 steps that can help.`,
`Did you know X? (X has to be some shocking statistic or interesting information.)`,
`If you're using X - ditch it right away.`,
`Wanna improve your X?`,
`Who else wants X?`,
`Why you're not getting X + how to fix it RIGHT AWAY.`,
`If you think that your X cares about Y, think twice.`,
`Wanna know an [industry] Secret to Y?`,
`You asked. Here's the answer. What's the difference between X and Y?`,
`**Alert!**Game Changer For Your X.`,
`What if I told you X? (X is something unusual or breaking the common belief.)`,
`An often-overlooked part of X. (And why it's crucial to Y.)`,
`If you want X to do Y, you've got to do Z. Here's how.`,
`Mind-Blowing Fact: [Write a shocking stat.]`,
`Do you feel frustrated because you squander money on X and don't see desired results?`,
`Do you want X, but can't figure out Y?`,
`Doing X and really want Y?`,
`The Top 3 Hacks To Improve X.`,
`Trying to do X (the thing that your target market really wants) while Y (difficulty, setback)?`,
`I'm answering the TOP question I get asked on social: [Insert the question that your audience is curious about.]`,
`How to turn X into Y.`,
`The only actual way to X?`,
`The #1 mistake I see people make with X is Y.`,
`What do X, Y & Z have in common?`,
`3 Hacks for Y (something that your target market really wants), even if Z (difficulty, setback):`,
`Why you always struggle to do X no matter how hard you try.`,
`Improve X with One Simple Technique.`,
`Do you think that X (ask something debatable)?`,
`If you've been told that the ONLY WAY to get X is to do Y, you've been MISLED. (Break the common belief.)`,
`What to do with X (And Chances Are It's Not What You Think It Is).`,
`What To Include In A Healthy Breakfast (And Chances Are It's Not What You Think It Is).`,
`X Ways I Increased My Y By Z (percentage) And So Can You:`,
`I average X and I only Y. (X and Y include numbers.)`,
`[Insert something your target market really wants to know about] is the question that I often get asked.`,
`"How can I X?" is the question that I often get asked.`,
`"Does X cause Y?" is the question that I often get asked.`,
`This X Year Old Y Trick Still Works.`,
`What makes a good X?`,
`To make your X MASSIVELY stand out from the crowd, do the opposite of what most people do.`,
`If your X doesn't do Y, you're doing it wrong.`,
`PRO TIP: How to make your X explode with one Simple Tactic.`,
`From starting X time ago to getting Y.`,
`3 Little-Known Steps to X:`,
`Don't know how to do X? Here's an evergreen piece of advice:`,
`How to get better at X? Try the Y FRAMEWORK:`,
`Succeeding with X is simple. Just follow these best practices:`,
`Not sure about X? Try this:`,
`When X, what happens to Y?`,
`What happens just before X?`,
`Are you missing these X in your Y?`,
`How to overcome X?`,
`The truth about X.`,
`What I wish I'd known about X at Y (age).`,
`Good or bad, X impacts Y.`,
`3 Stages of Y:`,
`Everybody knows X. What they don't know is Y.`,
`5 small things with a BIG EFFECT on X:`,
`One of the best X Frameworks to use if you want Y:`,
`Thinking about starting X? Here are X things to take into account before you start Y:`,
`X% of Y I see look like Z (something bad).`,
`How to MONETISE X?`,
`If you haven't done X, Y is a struggle.`,
`I'm convinced doing X is the best thing you can do for Y`,
`The cheat code for X`,
`I'm sure I'll get some hate on this but...`,
`A comment on one of my posts<br>[quote a shocking comment you've received]`,
`Do you know what kept me from doing  up until now?`,
`You don't need X to achieve Y.<br>Z is enough to Y. <br><br>Here's what I mean...`,
`A 90-second video on how to handle/overcome X:`,
`I ask myself these 3 questions before I X`,
`Master at least 2 of those 10 skills to work in X`,
`Average X:<br>[share something average in your industry]<br><br>Great X:<br>[share a better way to do that thing from earlier or a short list of better alternatives.]`,
`There are many 'good' X. <br><br>But, what separates the 'good' from the 'great'?<br><br>Here's my take...`,
`Does anyone else ... <br>(talk about something no one talks about but everyone definitely does or has an opinion about)`,
`Here are 3 things that ...`,
`Has anyone ... <br>(Make an observation about a common occurance within your industry)`,
`The truth about X and how to use it to Y`,
`Don't want to X? Here's how you can avoid X`,
`Don't want to X? Here's why you shouldn't avoid X`,
`This X will blow your mind. <br>(Use sparingly and only if you actually have something mindblowing)`,
`A X nightmare`,
`Have you tried this weird X tactic?`,
`2 examples of X building Y`,
`The most important thing X provides`,
`5 ways X aligns your Y`,
`X fails without this 1 element`,
`X fails when you don't do this`,
`X happens when you do this`,
`5 reasons why X comes from solid Y`,
`How X aligns your Y`,
`How to get started with X`,
`4 rock solid examples of X`,
`X creates trust in 3 ways`,
`5 of the best X strategies`,
`The worst failures of X`,
`Is X just a buzzword?`,
`How to get X with Y`,
`The best X tell stories this way`,
`Proof that X works`,
`A X nightmare
How to create lifelong customers`,
`5 errors in X that don't Y`,
`Do this if you want to beat everyone at X`,
`X: Expectations vs. Reality`,
`Will X Ever Rule the World?`,
`The Next Big Thing in X`,
`X Explained in Fewer than 55 Characters`,
`This Week's Top Stories About X`,
`Where Will X Be 5 Year From Now?`,
`5 Things About X You May Not Have Known`,
`5 Things Your Boss Wishes You Knew About X`,
`The Biggest Problem With X, And How You Can Fix It`,
`5 Up-and-Comers to Watch in the X Industry`,
`What NOT to Do in the X Industry`,
`5 Savvy Ways to Spend Leftover X Budget`,
`How to Sell X to a Skeptic`,
`5 Reasons You Shouldn't Invest in X`,
`5 Little Changes That'll Make a Big Difference With Your X`,
`Meet the Steve Jobs of the X Industry`,
`What's Holding Back the X Industry?`,
`5 Common Misconceptions About X`,
`5 Cliches About X You Should Avoid`,
`5 Undeniable Reasons People Hate X`,
`5 Things We All Hate About X`,
`5 Resources That'll Make You Better at X`,
`Ask Me Anything: 5 Answers to Your Questions About X`,
`The 5 Most Misunderstood Facts About X`,
`X Poll of the Day`,
`5 Horrible Mistakes You're Making With X`,
`5 Hours to Improving X`,
`Why Nobody Cares About X`,
`How to Get Hired in the X Industry`,
`5 Secretly Funny People Working in X`,
`5 Undeniable Reasons to Love X`,
`Think You're Cut Out for Doing X? Take This Quiz`,
`5 Compelling Reasons Why You Need X`,
`Addicted to X? Us Too. 5 Reasons We Just Can't Stop`,
`5 Things About X Your Boss Wants to Know`,
`The Anatomy of a Great X`,
`5 Startups That'll Change the X Industry for the Better`,
`How to Win Big in the X Industry`,
`Responsible for a X Budget? 5 Top Notch Ways to Spend Your Money`,
`Why It's Easier to Succeed With X Than You Might Think`,
`Why We Love X (And You Should, Too!)`,
`5 Real-Life Lessons About X`,
`5 Ways to Completely Revamp Your X`,
`Become an Expert on X by Watching These 5 Videos`,
`5 Things Everyone Hates About X`,
`5 Signs You Need Help With X`,
`5 Best Twitter Accounts to Learn About X`,
`Forget X: 5 Replacements You Need to Jump On`,
`The Ultimate Cheat Sheet on X`,
`Why You Should Forget About Improving Your X`,
`5 Answers to the Most Frequently Asked Questions About X`,
`5 Myths About X: Busted`,
`5 Things Your Competitors Can Teach You About X`,
`X: What No One Is Talking About`,
`5 Insightful Quotes About X`,
`5 Go-To Resources About X`,
`5 Hilarious Videos About X`,
`5 Surprising Stats About X`,
`Why You Should Spend More Time Thinking About X`,
`5 Steps to Finding the Perfect X`,
`5 Pinterest Accounts to Follow About X`,
`5 Fun Facts About X`,
`5 Ways to Completely Sabotage Your X`,
`X: The Good, the Bad, and the Ugly`,
`5 Do's and Don'ts for a Successful X`,
`5 Principles of Psychology You Can Use to Improve Your X`,
`5 Signs You Work With X`,
`Watch Out: How X Is Taking Over and What to Do About It`,
`X: It's Not as Difficult as You Think`,
`How Technology Is Changing How We Treat X`,
`5 Qualities the Best People in the X Industry Tend to Have`,
`5 Signs You Should Invest in X`,
`How to Solve Issues With X`,
`5 Things You Learned in Kindergarden That'll Help You With X`,
`5 Things Most People Don't Know About X`,
`The Biggest Trends in X We've Seen This Year`,
`5 Signs You're a X Expert`,
`Don't Make This Silly Mistake With Your X`,
`5 Reasons Why You Shouldn't Ignore X`,
`The No. 5 Question Everyone Working in X Should Know How to Answer`,
`5 Best X Bloggers You Need to Follow`,
`The Most Innovative Things Happening With X`,
`What Will X Be Like in 55 Years?`,
`5 Superstars We'd Love to Recruit for Our X Team`,
`An Introduction to X`,
`How Much Should You Be Spending on X?`,
`5 Up-and-Coming Trends About X`,
`5 Things You Should Know About X`,
`5 Faux Pas That Are Actually Okay to Make With Your X`,
`The Worst Videos of All Time About X`,
`The Worst Advice We've Ever Heard About X`,
`5 Things Steve Jobs Can Teach Us About X`,
`5 Companies Leading the Way in X`,
`How to Explain X to Your Mom`,
`5 Lessons About X You Can Learn From Superheroes`,
`What Freud Can Teach Us About X`,
`5 Trends You May Have Missed About X`,
`5 Online Communities About X You Should Join`,
`Buzzwords, De-buzzed: 5 Other Ways to Say X`,
`What Sports Can Teach Us About X`,
`X: 5 Thing You're Forgetting to Do`,
`The Top Reasons People Succeed in the X Industry`,
`A Beginner's Guide to X`,
`5 Creative Ways to Write About X`,
`The Most Influential People in the X Industry and Their Celebrity Dopplegangers`,
`The Pros and Cons of X`,
`How Successful People Make the Most of Their X`,
`The Most Common X Debate Isn't as Black and White as You Might Think`,
`Your Worst Nightmare About X Come to Life`,
`5 Tools Everyone in the X Industry Should Be Using`,
`Why the Biggest Myths About X May Actually Be Right`,
`5 Inspirational Quotes About X`,
`The 5 Greatest Moments in X History`,
`How to Get More Results Out of Your X`,
`5 Secrets About X You Can Learn From TV`,
`The Advanced Guide to X`,
`Undeniable Proof That You Need X`,
`5 Stats About X to Make You Look Smart Around the Water Cooler`,
`X: All the Stats, Facts, and Data You'll Ever Need to Know`,
`X: A Simple Definition`,
`What I Wish I Knew a Year Ago About X`,
`5 Trailblazers Leading the Way in X`,
`How to Save Money on X`,
`How Did We Get Here? The History of X Told Through Tweets`,
`How to Explain X to Your Grandparents`,
`Getting Tired of X? 5 Sources of Inspiration That'll Rekindle Your Love`,
`5 Up-and-Coming X Bloggers You Need to Watch`,
`5 Apps to Help You Manage Your X`,
`5 Businesses Doing a Great Job at X`,
`The X Case Study You'll Never Forget`,
`5 Reasons Why You Should Ignore X`,
`What the Best X Pros Do (and You Should Too)`,
`A Productive Rant About X`,
`Will X Ever Die?`,
`Forget X: 5 Reasons Why You No Longer Need It`,
`A Look Into the Future: What Will the X Industry Look Like in 5 Years?`,
`5 Helpful Tips For Doing X`,
`5 Facebook Pages to Follow About X`,
`5 Bad Habits That People in the X Industry Need to Quit`,
`5 Signs You Sell X for a Living`,
`5 Meetups About X You Should Attend`,
`5 Books About X You Should Read`,
`5 Fundamentals About X You Didn't Learn in School`,
`The 5 Best Pinterest Boards for Learning About X`,
`5 TED Talks That Anyone Working in X Should Watch`,
`5 Reasons Your X Is Broken (And How to Fix It)`,
`What Hollywood Can Teach Us About X`,
`5 Weird Hobbies That'll Make You Better at X`,
`5 Best Blogs to Follow About X`,
`Everything You've Ever Wanted to Know About X`,
`Don't Buy Into These Trends About X`,
`5 Sites to Help You Become an Expert in X`,
`5 Facts About X That Will Instantly Put You in a Good Mood`,
`5 Videos About X That'll Make You Cry`,
`How to Explain X to Your Boss`,
`Responsible for a X Budget? 5 Terrible Ways to Spend Your Money`,
`5 Embarrassing X Faux Pas You Better Not Make`,
`What Would the World Look Like Without X?`,
`Does Your X Pass The Test? 5 Things You Can Improve On Today`,
`5 Terms Everyone in the X Industry Should Know`,
`Enough Already! 5 Things About X We're Tired of Hearing`,
`How to Explain X to a Five-Year-Old`,
`The Most Common Complaints About X, and Why They're Bunk`,
`The History of X`,
`5 Inspirational Graphics About X`,
`How to Master X in 5 Simple Steps`,
`5 Common Reasons Why Your X Isn't Working (And How To Fix It)`,
`Is Tech Making X Better or Worse?`,
`A X Success Story You'll Never Believe`,
`5 Quick Tips About X`,
`5 Things About X You'll Kick Yourself for Not Knowing`,
`Why You Should Focus on Improving X`,
`When Professionals Run Into Problems With X, This Is What They Do`,
`5 No-Fuss Ways to Figuring Out Your X`,
`5 Laws That'll Help the X Industry`,
`The Ugly Truth About X`,
`Why You're Failing at X`,
`How to Outsmart Your Boss on X`,
`5 Tips About X From Industry Experts`,
`5 Best Facebook Pages of All Time About X`,
`Where to Find Guest Blogging Opportunities on X`,
`5 Ways to Completely Ruin Your X`,
`5 Wrong Answers to Common X Questions: Do You Know the Right Ones?`,
`A Step-by-Step Guide to X`,
`What the Oxford English Dictionary Doesn't Tell You About X`,
`5 Best Tweets of All Time About X`,
`5 Gifts for the X Lover in Your Life`,
`The Urban Dictionary of X`,
`5 Most Underrated Skills That'll Make You a Rockstar in the X Industry`,
`The Intermediate Guide to X`,
`The Ultimate Glossary of Terms About X`,
`X Explained in Instagram Photos`,
`The Most Hilarious Complaints We've Heard About X`,
`The 5 Biggest Disasters in X History`,
`Why People Love to Hate X`,
`5 Thoughts About X That'll Brighten Your Day`,
`A Trip Back in Time: How People Talked About X 5 Years Ago`,
`How to Outsmart Your Peers on X`,
`The Ultimate Checklist for Buying a X`,
`The Worst Advice You Could Ever Get About X`,
`5 Surprising Facts About X`,
`5 Things You Learned in Preschool That'll Help You With X`,
`The Best Kept Secrets About X`,
`5 Killer Quora Answers on X`,
`The Most Pervasive Problems in X`,
`X: 5 Things I Wish I'd Known Earlier`,
`5 Tips for Making a Good X Even Better`,
`5 Reasons You Need to Stop Stressing About X`,
`5 People You Oughta Know in the X Industry`,
`So You've Bought X ... Now What?`,
`5 Celebrities Who Should Consider a Career in X`,
`How the 5 Worst X Fails of All Time Could Have Been Prevented`,
`From Around the Web: 5 Awesome Photos of X`,
`The Best Advice You Could Ever Get About X`,
`5 X About X That You Need to Know`,
`What the Heck Is X?`,
`5 Misconceptions You Probably Have About X`,
`The Most Common Mistakes People Make With X`,
`The Most Influential People in the X Industry`,
`What's the Current Job Market for X Professionals Like?`,
`The Ultimate Guide to X`,
`Are You Getting the Most Out of Your X?`,
`5 Dirty Little Secrets About the X Industry`,
`The Evolution of X`,
`5 Effective X Elevator Pitches`,
`5 Tell-Tale Signs You Need to Get a New X`,
`5 Things Everyone Gets Wrong About X`,
`5 Situations When You'll Need to Know About X`,
`5 Questions You Should Always Ask About X Before Buying It`,
`5 Questions You Might Be Afraid to Ask About X`,
`5 Great X Public Speakers`,
`5 Things Your Parents Taught You About X`,
`Everything You Need to Know About X`,
`How to Do X`,
`How to Become an Expert at X`,
`What is X and Why Does it Matter?`,
`Common Mistakes of X`,
`5 Steps to Developing a Successful X`,
`5 Examples of Successful X`,
`5 Recommended Tools to Build X`,
`5 Projects to Improve Your X Skills`
]
