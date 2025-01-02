---
sidebar_position: 4
---

# 积极地寻求失败

<center>
  <img src="https://s2.loli.net/2024/12/30/kfapVwuncThEH7J.png" alt="失败是成功之母" />
</center>
这世上大概人人都听过“失败是成功之母”这句话。曾经的我以为它不过是句烂鸡汤，是那种一天编一百句不嫌多的废话。然而一年的独立开发经历，让我对这句话有了完全不同的理解。现在的我觉得它是无上真理。

我们不妨换一种说法：

**积极地寻求失败，因为只有失败才能让你真正进步。**

一本书读完一周可能便忘了大半，而失败带来的教训则刻骨铭心，永远不会遗忘。遗忘只是表象，这里的区别在于你是否真正理解并内化了某件事，而亲身体验的效果往往最直接。正如[前文](/indiehacking-is-hard)所言，独立开发就是一系列不断受挫的过程，而每一次的挫折都让人成长，帮我们避免再犯同样的错误。

当然，失败与失败之间也有不同。有的失败会导致无法挽回的后果，这种需要谨慎应对。而独立开发中的失败往往可以挽回，比如你的产品卖不动，那就转变策略或学习别人，直到找到适合自己的方法；又比如去 Reddit 宣传导致账号被封，那就换个子版块，或是再起个新号。

当我们了解这两点，便会意识到挫折和失败并非坏事。不仅如此，我们更应该积极地寻求失败，然后根据失败做出调整，正所谓 [Fail fast](https://en.wikipedia.org/wiki/Fail_fast_(business))。这就不得不提到 [pivot](https://www.ycombinator.com/library/6p-all-about-pivoting)，它几乎是成功 startup 的必经之路，比如最近大火的 AI 编辑器 Cursor 最开始其实是个帮人写 Email 的应用。Pivot 之所以能带来奇效，因为团队已从之前的失败中吸取教训，并找到了真正的市场需求。显然，越大的团队越难 pivot，而独立开发者可以自行拍板，应当善用这个优势。我可以讲讲自己的经历。

## Clicknow 的 pivot 故事

[Clicknow](https://clicknow.ai/) 起初叫 "Xylect"，在[这里](https://web.archive.org/web/20240720122647/https://xylect.app/)你能找到最早的一版网站。开始我压根就没想写一个 AI 工具，只想解决自己划日期添加日历的需求。既然实现了划词操作，那就多加点功能吧，于是有了划词解释。这就是 Xylect 最初的定位：一个多功能划词工具。之所以取名 Xylect 也是谐音 "Select"，毕竟是通过选择文本来交互。不仅如此，一开始我甚至极力和 AI 划清界限，不想让别人觉得 Xylect 是 yet another AI app。这是最早的宣传语：

> Wikipedia/Spell checker/Flight tracker/Calendar/Calculator with a single click  
> Automate boring tasks & save time

和 Reddit 帖子：[I made an app to help you automate boring tasks with one click](https://www.reddit.com/r/macapps/comments/1e8oxjn/i_made_an_app_to_help_you_automate_boring_tasks/?sort=old)

然而随着时间推移，我的想法逐渐产生了变化——因为我发现不论是自己还是早期用户，日常基本只用 AI 解释和翻译，其次是拼写检查。至于添加日历、航班追踪和计算器，我总共加起来用过不到五次。另一方面，我发现 Xylect 的 AI 划词确实帮我节省了很多时间，这是我当初没料到的。渐渐地，我不再羞于称 Xylect 为一个 AI 工具，而 multi-tool 的定位则是越看越不顺眼。终于有一天，我小小地 pivot 了一下，把 Xylect [重新定位](https://web.archive.org/web/20240812043240/https://xylect.app/)成一个 “AI search & translation” 工具。

时间进到十月初。这时 Xylect 已经有了少量用户，我时不时会收到一些反馈。有个反馈很有意思，说不知道 “Xylect” 这个词怎么念。 起初我不以为意，因此 `Xylect == select` 在我脑中已经固化，便觉得大部分人也应该会读。后来问的人多了，我也动摇起来：难不成大家真不会念？疑虑像泡泡一样膨胀，有一天我终于受不了了，遂决定改名。一番搜索后我灵光一现，click + know, Clicknow，还有比这更贴切的名字吗？至于后缀，既然我已经认定 Clicknow 是一个 AI 工具，那用 .ai 域名也是顺理成章。于是，[clicknow.ai](https://clicknow.ai) 诞生了。

