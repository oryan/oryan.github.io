const summaries = [
`How you got started in your career or biz`,
`How you got started on social`,
`Your morning routine`,
`Your process for... [insert something you're known for doing or that you do well] (Eg. planning the month's social content)`,
`Something that most people don't know about you`,
`The most embarrassing thing that's ever happened to you`,
`Tell a story with a hilarious or unexpected ending`,
`Talk about a funny situation that happened to you`,
`The dumbest thing you've ever done - and what you learned from it`,
`Talk about a recent mistake you made and how you learned from it (or don't want other people to make the same mistake)`,
`The job you dreamed about having as a kid (and the job you have now)`,
`Something that happened to change your view of a person or situation`,
`A time you were really righteous about something and then got served humble pie...`,
`A time your realized you were dead wrong`,
`Talk about something you believed as a kid and when/how you came to realize that it wasn't true (Santa, how babies are made)`,
`Something special you used to do with your siblings or family`,
`A day in the life (of...)`,
`"You asked" (Answer something your audience asked you)`,
`Common myths about what you do`,
`Top 3 hilarious things people think you do as a [insert your job title]`,
`A time when you realized you'd turned into your parents`,
`A time when you realized your kids are doing what you did when you were a kid`,
`A story from when you were traveling (taxi, plane ride, meeting people)`,
`Talk about the big result when you finally decided to do something you'd been putting off`,
`Talk about the lack of desired result you got when you finally decided to do something people had been telling you to do for a long time`,
`A time when someone did something really amazing or nice for you`,
`When you did something nice not expecting anything in return, and something great happened`,
`Talk about a struggle you overcame in your business or life`,
`Make an "introduction video" and tell people a bit about yourself (and how you got started on whatever you talk about in your videos.)`,
`Make an "introduction video" and tell people a bit about yourself and what they will get from following you (latest trends, tips, inspiration etc.)`,
`A change you've experienced`,
`Compare and contrast.`,
`A situation that makes you completely change how you behave (speaking to your boss vs. your partner)`,
`Face objections.`,
`A situation that should make you happy but has the opposite effect (being excited about Christmas dinner, until you find out your hosting)`,
`A situation where you put on a smiling face to the world, but inside you're upset/freaking out`,
`How you speak around your friends vs. your boss`,
`The moment when you realize something crazy or unnerving (Eg. my previous students will be watching my social posts)`,
`How you talk to teammates when you're frustrated vs. when you want something`,
`Before work vs. after work`,
`Before going out for the night vs. when you come home`,
`Before/when you put something you know you need to do off vs. after when you have to face the consequences`,
`Zoom meeting camera on vs. off`,
`Newbies vs. pros`,
`Share a milestone.`,
`A story from when you just started something, and the results now`,
`Your situation pre pandemic vs. now`,
`Identify similarities in outliers.`,
`Humanize yourself.`,
`Your routine when working at home, vs. going into work`,
`Something that everyone is frustrated about because it used to work but doesn't anymore`,
`Company news or product update.`,
`Something everyone is afraid of that they shouldn't be (the dark - under the bed)`,
`Something that everyone thinks way too much about that they shouldn't`,
`Something random that you wonder about the answer to from time to time (Eg. Where did the universe come from?)`,
`A situation where you lose your attention and your mind starts wandering and you have random thoughts (Eg. How close could the Earth get to the sun before it fried?) - (during the drive home from work)`,
`A common or relatable problem on social`,
`A common or relatable problem with technology in your industry`,
`Something you do that you know you shouldn't (check your newest social engagement stats every 5 mins after posting)`,
`Something common or relatable you know you should do less of (eg. scroll social)`,
`A situation you catastrophize that's really not a big deal (124 views on your latest social post)`,
`Something you finally figured out how to do, way too late (when everyone else probably knew this already)`,
`A weird but relatable habit you have that doesn't make sense (eating in order of least fav to most fav foods so you can enjoy the best taste last)`,
`A situation where you know what you should do, but laziness gets the best of you and you choose to do something unproductive`,
`A common situation where you got a negative result because of lack of planning`,
`Something silly/small you do (and probably everyone else)that you wonder if it makes you a bad person (purposely leaving 4 squares of toilet paper so you don't have to get a new roll)`,
`Something you did that you knew probably was not a good choice (people warned you against it), but it actually turned out well for you. Explain why it worked.`,
`Something really small someone did or said that annoyed you, and you spend way too much time analyzing it or holding a grudge ("Oh, that was great considering it was your first post!")`,
`Something you did that you didn't think was a big deal at the time, but now you're dealing with the consequences. Good or bad.`,
`Something you thought was good at first, that you eventually figured out was bad.`,
`Create a funny and typical conversation between two characters played by you (use two camera shots/angles)`,
`Write a love letter to your job, industry, or career.`,
`Share an obstacle you've had to overcome.`,
`Share your morning routine, work routine, or how you plan your day.`,
`3 ways to... (do something)`,
`My fav 3 tools for...`,
`Top tips for...`,
`Best hacks for...`,
`How I [insert outcome] with [insert tool]`,
`How I [insert outcome] in [insert timeframe]`,
`How I finally [insert outcome}`,
`Share something your [insert industry, a person type or platform] "doesn't want you to know"`,
`Share news about your topic or industry`,
`Share the latest trend in your industry or for your topic`,
`3 easy ways to...`,
`The best way to...`,
`How to do [insert activity or task] the easy way`,
`Stop wasting time and do [insert activity or task] the easy way`,
`3 tips to quickly [insert desired goal]`,
`Teach a lifestyle hack`,
`Teach a timesaving hack (relate it to your channel or niche)`,
`Teach an effort saving hack`,
`Share something that seems difficult but show how it's actually simple`,
`Share how things have changed in your niche/are or industry ("Things have changed with/on/since [insert platform type, or time period]. Here's what you need to know")`,
`The latest update for/on [a program, platform or situation] is BIG. Here's what you need to know`,
`Teach people how to use a tool`,
`Teach people how to use a feature of a tool or platform`,
`Here's what you need to know about [popular topic, tool or situation]`,
`3 Things you need to know about [popular topic, tool or situation] in [insert date/time]`,
`What [insert platform, person or person type] on/for [platform type, tool situation]`,
`What you need to do to [insert common desire, eg. stop receiving notifications from social]`,
`Why [insert activity] is so difficult and how to fix it/make it easy (eg. why growing is so difficult, and how to make it easier)`,
`Here's how the best [insert person type] get [insert desired result] (Eg. Here's how the best socialers go viral)`,
`Here's the truth about [insert tool, situation or person type] and how you can [insert desired result]`,
`How to [insert what you're teaching] the easy way`,
`How to stop wasting time doing [insert activity]`,
`Do a true or false video for your viewers to guess the answer (make 3 statements and show after each whether it's true or false)`,
`Show how to multitask like a boss in a common situation`,
`How to save time doing something extremely common (eg. brushing teeth, folding clothes)`,
`Talk about a situation or thing that everyone struggles with or finds annoying and teach a better way to do it (opening a can, cutting cheese)`,
`Teach a tech shortcut for a common problem`,
`Teach people how to use that latest feature on [insert tool type, platform or device]`,
`The most common mistake people make on/with [insert tool type, platform or device] and how to fix it`,
`3 common mistakes people make on/with [insert tool type, platform or device]`,
`2 common mistakes people make on/with [insert tool type, platform or device] and how to fix them`,
`Why you should start [insert activity] today (explain why - and how)`,
`Talk about the biggest myths in your industry, area, or for a topic or tool type`,
`Talk about a major mistake people make (in your area or for your topic) and how to avoid it`,
`Talk about a common problem and how to solve it`,
`Make a "for dummies" video and break down a difficult concept so it's easy to Understand`,
`Share a quote you love. Connect it to an industry insight.`,
`Give a motivational pep talk about something your clients/audience are struggling with`,
`Tell people 3 reasons why they should keep going after their dreams`,
`Talk about a time you wanted to give up or your goal or dream and you kept going`,
`Share a success story from a client or someone who followed your advice`,
`Share another content creator's opinion and point out what you liked`,
`Talk about a major transformation you experienced`,
`Talk about someone inspirational, why you admire them and what they taught you`,
`Share something beautiful your boss or partner did for you`,
`Share how you've changed how you see or feel about something or yourself for the better`,
`Share a common situation where people feel like they're not good enough, and tell them why they are good enough`,
`Tell a story where you saw or heard something that gave you the confidence to finally do something you wanted to do`,
`Share advice on what your audience needs to STOP doing.`,
`Share your biggest challenge of the week. Connect it to a useful tip you used to overcome it.`,
`Share your biggest win of the week. Connect it to a useful tip.`,
`Share relevant industry data and what that means for you.`,
`Share a list of Pros/Cons. Bonus points for inverting them or adding  twist.`,
`Call out a specific audience.`,
`Call out a specific situation.`,
`Go live and take questions from your audience.`,
`Post a roundup of people you admire.`,
`Share do's and don'ts.`,
`Spotlight companies that stand out. Point out what they did to grab your attention or how they change the game.`,
`Speculate about somethingyou have expertise in and know your audience is wondering about.`,
`Share your best productivity or time-saving hack.`,
`Share your fav content creators that you follow`,
`Share something that inspires you.`,
`Answer a common question you get from clients.`,
`Answer a common question you get from your audience.`,
`Create a persuasive post.`,
`Predict the future.`,
`React to a piece of content create.`,
`Create a top 10 list.`,
`Create or share an infographic.`,
`Share the story of how you got to where you are.`,
`Spotlight how a customer uses your product/service.`,
`Show what happens if you DON'T make a move.`,
`Talk about a common misconception in your industry.`,
`Reveal your process.`,
`Do a roundup of your tech stack.`,
`Crowdsource your post.`,
`Re-post a piece of content that did well in the past.`,
`Would you Rather?`,
`Share the history of your company or brand...`,
`Share what you learned from the last book you read`,
`Share a highlight from your favorite workflow/podcast/software.`,
`Share a throwback. Connect it to a useful tip.`,
`Comment on industry news. (Bonus points for offering a novel perspective)`,
`Share advice on what your audience needs to START doing`,
`Share advice on what your audience needs to STOP doing`,
`Describe what you would do if you had to start over today. Common pitfalls to avoid? Hard lessons learned?`,
`Share a short list of positive results that doing X has done for you.`,
`Outline an effective framework for accomplishing X in a way that your audience can do on their own.`,
`How can people do something, step-by-step?`,
`Inspire people to take action through a story.`,
`Reverse engineer something and show how it works.`,
`What are things you believe that the majority don't?`,
`What are you noticing in your industry?`,
`What do you think the future will look like?`,
`What questions are you often asked?`
];
