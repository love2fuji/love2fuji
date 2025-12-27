import{_ as s,c as n,o as p,a3 as t}from"./chunks/framework.CUcrqFol.js";const u=JSON.parse('{"title":"5.4.3 功能扩展","description":"5.4.3 功能扩展：让 AI 帮你添加新功能 经过本节学习，你将掌握： 常见的功能扩展方向和难度评估 用第三章学到的框架写功能扩展 Prompt 添加新功能的安全流程 一个完整的功能添加实战案例 功能扩展方向参考 收集完反馈后，你可能想给待办清单加一些新功能。 下面是一些常见的扩展方向，按难度分类： 基础级功能（推荐","frontmatter":{"title":"5.4.3 功能扩展","order":4},"headers":[],"relativePath":"Basic/05-advanced/5.4-iteration/5.4.3-new-features.md","filePath":"Basic/05-advanced/5.4-iteration/5.4.3-new-features.md","lastUpdated":1765094268000}'),e={name:"Basic/05-advanced/5.4-iteration/5.4.3-new-features.md"};function l(i,a,d,o,c,r){return p(),n("div",null,[...a[0]||(a[0]=[t(`<h1 id="_5-4-3-功能扩展-让-ai-帮你添加新功能" tabindex="-1">5.4.3 功能扩展：让 AI 帮你添加新功能 <a class="header-anchor" href="#_5-4-3-功能扩展-让-ai-帮你添加新功能" aria-label="Permalink to &quot;5.4.3 功能扩展：让 AI 帮你添加新功能&quot;">​</a></h1><p>经过本节学习，你将掌握：</p><ul><li>常见的功能扩展方向和难度评估</li><li>用第三章学到的框架写功能扩展 Prompt</li><li>添加新功能的安全流程</li><li>一个完整的功能添加实战案例</li></ul><h2 id="功能扩展方向参考" tabindex="-1">功能扩展方向参考 <a class="header-anchor" href="#功能扩展方向参考" aria-label="Permalink to &quot;功能扩展方向参考&quot;">​</a></h2><p>收集完反馈后，你可能想给待办清单加一些新功能。</p><p>下面是一些常见的扩展方向，按难度分类：</p><h3 id="基础级功能-推荐先尝试" tabindex="-1">基础级功能（推荐先尝试） <a class="header-anchor" href="#基础级功能-推荐先尝试" aria-label="Permalink to &quot;基础级功能（推荐先尝试）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>功能</th><th>难度</th><th>说明</th></tr></thead><tbody><tr><td>任务分类标签</td><td>⭐⭐</td><td>给任务打上&quot;工作&quot;、&quot;生活&quot;、&quot;学习&quot;等标签，可以按标签筛选</td></tr><tr><td>优先级标记</td><td>⭐⭐</td><td>高/中/低优先级，用不同颜色区分</td></tr><tr><td>搜索功能</td><td>⭐⭐</td><td>任务多了之后能快速找到</td></tr><tr><td>深色模式</td><td>⭐⭐</td><td>晚上看着不刺眼</td></tr></tbody></table><h3 id="进阶级功能-有一定挑战" tabindex="-1">进阶级功能（有一定挑战） <a class="header-anchor" href="#进阶级功能-有一定挑战" aria-label="Permalink to &quot;进阶级功能（有一定挑战）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>功能</th><th>难度</th><th>说明</th></tr></thead><tbody><tr><td>截止日期提醒</td><td>⭐⭐⭐</td><td>设置截止时间，过期任务标红</td></tr><tr><td>任务排序</td><td>⭐⭐⭐</td><td>可以拖拽调整任务顺序</td></tr><tr><td>数据导出</td><td>⭐⭐⭐</td><td>把任务列表导出成文件</td></tr><tr><td>简单统计</td><td>⭐⭐⭐</td><td>显示&quot;本周完成了多少任务&quot;</td></tr></tbody></table><p>建议从基础级功能开始。成功添加一两个之后，再挑战进阶级。</p><h2 id="添加新功能的安全流程" tabindex="-1">添加新功能的安全流程 <a class="header-anchor" href="#添加新功能的安全流程" aria-label="Permalink to &quot;添加新功能的安全流程&quot;">​</a></h2><p>在动手之前，有一个重要原则：</p><div class="warning custom-block"><p class="custom-block-title">黄金法则</p><p><strong>每次添加新功能前，先保存当前版本。</strong></p></div><p>按照这个流程操作：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 确认当前版本能正常运行</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>2. 用 GitHub Desktop 提交一次（Commit）</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>3. 写 Prompt 让 AI 添加新功能</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>4. 测试新功能</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>5. 如果成功 → 再 Commit 一次</span></span>
<span class="line"><span>   如果失败 → 回滚到上一版</span></span></code></pre></div><p>这样，即使新功能改崩了，你也能随时恢复。（这就是 5.1 节学的版本管理的用处）</p><h2 id="用-s-c-a-f-f-框架写功能扩展-prompt" tabindex="-1">用 S.C.A.F.F. 框架写功能扩展 Prompt <a class="header-anchor" href="#用-s-c-a-f-f-框架写功能扩展-prompt" aria-label="Permalink to &quot;用 S.C.A.F.F. 框架写功能扩展 Prompt&quot;">​</a></h2><p>还记得第三章的 S.C.A.F.F. 框架吗？添加新功能时同样适用。</p><h3 id="框架回顾" tabindex="-1">框架回顾 <a class="header-anchor" href="#框架回顾" aria-label="Permalink to &quot;框架回顾&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字母</th><th>含义</th><th>说明</th></tr></thead><tbody><tr><td><strong>S</strong></td><td>Situation（情境）</td><td>当前项目是什么样的</td></tr><tr><td><strong>C</strong></td><td>Challenge（挑战）</td><td>我想添加什么功能</td></tr><tr><td><strong>A</strong></td><td>Ask（请求）</td><td>具体需要 AI 做什么</td></tr><tr><td><strong>F</strong></td><td>Format（格式）</td><td>希望得到什么样的输出</td></tr><tr><td><strong>F</strong></td><td>Filter（过滤）</td><td>有什么限制条件</td></tr></tbody></table><h3 id="示例-添加分类标签功能" tabindex="-1">示例：添加分类标签功能 <a class="header-anchor" href="#示例-添加分类标签功能" aria-label="Permalink to &quot;示例：添加分类标签功能&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【情境】</span></span>
<span class="line"><span>我有一个待办清单项目，目前实现了：</span></span>
<span class="line"><span>- 添加任务</span></span>
<span class="line"><span>- 删除任务</span></span>
<span class="line"><span>- 标记任务完成</span></span>
<span class="line"><span>- 使用 localStorage 保存数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>技术栈：HTML + CSS + JavaScript（纯前端，没有后端）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【挑战】</span></span>
<span class="line"><span>我想给任务添加&quot;分类标签&quot;功能。用户可以：</span></span>
<span class="line"><span>1. 创建任务时选择一个分类（工作/生活/学习）</span></span>
<span class="line"><span>2. 按分类筛选任务</span></span>
<span class="line"><span>3. 每个分类用不同的颜色显示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【请求】</span></span>
<span class="line"><span>请帮我修改代码实现这个功能。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【格式】</span></span>
<span class="line"><span>1. 先说明需要修改哪些部分</span></span>
<span class="line"><span>2. 给出修改后的完整代码</span></span>
<span class="line"><span>3. 说明如何测试这个功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【限制】</span></span>
<span class="line"><span>- 保持现有功能不变</span></span>
<span class="line"><span>- 使用现有的代码风格</span></span>
<span class="line"><span>- 分类数据也要保存到 localStorage</span></span></code></pre></div><h2 id="各功能的-prompt-模板" tabindex="-1">各功能的 Prompt 模板 <a class="header-anchor" href="#各功能的-prompt-模板" aria-label="Permalink to &quot;各功能的 Prompt 模板&quot;">​</a></h2><p>这里提供几个常用功能的 Prompt 模板，你可以直接复制使用，只需要把 <code>[方括号里的内容]</code> 替换成你的实际情况。</p><h3 id="优先级标记" tabindex="-1">优先级标记 <a class="header-anchor" href="#优先级标记" aria-label="Permalink to &quot;优先级标记&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单项目需要添加&quot;优先级&quot;功能：</span></span>
<span class="line"><span>- 每个任务可以设置优先级：高/中/低</span></span>
<span class="line"><span>- 高优先级用红色标记，中优先级用黄色，低优先级用灰色</span></span>
<span class="line"><span>- 默认优先级是&quot;中&quot;</span></span>
<span class="line"><span>- 可以按优先级排序显示（高的在上面）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当前项目技术栈：[HTML + CSS + JavaScript / 其他]</span></span>
<span class="line"><span>数据存储方式：[localStorage / 其他]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请修改代码实现这个功能，保持现有功能正常。</span></span></code></pre></div><h3 id="搜索功能" tabindex="-1">搜索功能 <a class="header-anchor" href="#搜索功能" aria-label="Permalink to &quot;搜索功能&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单需要添加搜索功能：</span></span>
<span class="line"><span>- 在任务列表上方添加一个搜索框</span></span>
<span class="line"><span>- 输入关键词时，实时筛选包含该关键词的任务</span></span>
<span class="line"><span>- 搜索框为空时显示所有任务</span></span>
<span class="line"><span>- 搜索不区分大小写</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当前项目技术栈：[你的技术栈]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出实现代码。</span></span></code></pre></div><h3 id="深色模式" tabindex="-1">深色模式 <a class="header-anchor" href="#深色模式" aria-label="Permalink to &quot;深色模式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单需要添加深色模式切换功能：</span></span>
<span class="line"><span>- 在页面右上角添加一个切换按钮（太阳/月亮图标）</span></span>
<span class="line"><span>- 点击可以在浅色/深色模式之间切换</span></span>
<span class="line"><span>- 记住用户的选择（下次打开还是同样的模式）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当前的颜色方案：</span></span>
<span class="line"><span>- 背景色：[白色]</span></span>
<span class="line"><span>- 文字颜色：[黑色]</span></span>
<span class="line"><span>- 主题色：[蓝色]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出实现代码，包括深色模式的配色建议。</span></span></code></pre></div><h3 id="截止日期" tabindex="-1">截止日期 <a class="header-anchor" href="#截止日期" aria-label="Permalink to &quot;截止日期&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单需要添加截止日期功能：</span></span>
<span class="line"><span>- 创建任务时可以选择截止日期（可选，不是必填）</span></span>
<span class="line"><span>- 任务卡片上显示截止日期</span></span>
<span class="line"><span>- 已过期的任务用红色高亮显示</span></span>
<span class="line"><span>- 今天到期的任务用黄色高亮显示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当前项目技术栈：[你的技术栈]</span></span>
<span class="line"><span>数据存储方式：[localStorage / 其他]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出实现代码。</span></span></code></pre></div><h2 id="实战案例-添加分类标签" tabindex="-1">实战案例：添加分类标签 <a class="header-anchor" href="#实战案例-添加分类标签" aria-label="Permalink to &quot;实战案例：添加分类标签&quot;">​</a></h2><p>下面是一个完整的对话记录，展示如何给待办清单添加分类标签功能。</p><h3 id="第一轮-说明需求" tabindex="-1">第一轮：说明需求 <a class="header-anchor" href="#第一轮-说明需求" aria-label="Permalink to &quot;第一轮：说明需求&quot;">​</a></h3><p>你发送的 Prompt（使用上面的 S.C.A.F.F. 模板）后，AI 会返回修改方案和代码。</p><h3 id="第二轮-测试发现问题" tabindex="-1">第二轮：测试发现问题 <a class="header-anchor" href="#第二轮-测试发现问题" aria-label="Permalink to &quot;第二轮：测试发现问题&quot;">​</a></h3><p>测试后，你可能发现问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>分类功能基本可以用了，但有个问题：</span></span>
<span class="line"><span>切换分类筛选时，如果当前分类下没有任务，页面是空白的，用户会困惑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请添加一个提示，当筛选结果为空时显示&quot;暂无任务&quot;。</span></span></code></pre></div><h3 id="第三轮-微调细节" tabindex="-1">第三轮：微调细节 <a class="header-anchor" href="#第三轮-微调细节" aria-label="Permalink to &quot;第三轮：微调细节&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>现在&quot;暂无任务&quot;的提示可以显示了，但文字颜色太浅，不太明显。</span></span>
<span class="line"><span>请把提示文字改成灰色，并加粗显示。</span></span></code></pre></div><p>这就是迭代的过程：做一版 → 发现问题 → 再改进。</p><h2 id="测试新功能的检查清单" tabindex="-1">测试新功能的检查清单 <a class="header-anchor" href="#测试新功能的检查清单" aria-label="Permalink to &quot;测试新功能的检查清单&quot;">​</a></h2><p>每次添加新功能后，用这个清单验证：</p><ul><li>[ ] 新功能按预期工作</li><li>[ ] 原有功能（添加、删除、完成任务）仍然正常</li><li>[ ] 刷新页面后数据没有丢失</li><li>[ ] 在手机浏览器上也能正常显示</li><li>[ ] 没有明显的报错（打开浏览器控制台检查）</li></ul><p>全部通过后，记得用 GitHub Desktop 提交一次，记录这个里程碑。</p><h2 id="遇到问题时" tabindex="-1">遇到问题时 <a class="header-anchor" href="#遇到问题时" aria-label="Permalink to &quot;遇到问题时&quot;">​</a></h2><p>如果 AI 给的代码不能正常工作，可以这样反馈：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你给的代码运行后出现了问题：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【问题描述】</span></span>
<span class="line"><span>点击分类筛选按钮后，页面变成空白，所有任务都不显示了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【错误信息】</span></span>
<span class="line"><span>打开浏览器控制台，看到这个报错：</span></span>
<span class="line"><span>Uncaught TypeError: Cannot read property &#39;filter&#39; of undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【期望行为】</span></span>
<span class="line"><span>点击&quot;工作&quot;分类，应该只显示标记为&quot;工作&quot;的任务。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我找出问题并修复。</span></span></code></pre></div><p>提供具体的问题描述和错误信息，AI 更容易帮你解决。</p><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><ul><li>从基础级功能开始，成功后再挑战进阶级</li><li>每次改代码前先 Commit，改崩了能恢复</li><li>用 S.C.A.F.F. 框架写功能扩展 Prompt</li><li>添加功能是一个迭代过程，一轮不行就多轮</li><li>测试通过后记得再 Commit 一次</li></ul><div class="tip custom-block"><p class="custom-block-title">小步前进</p><p>不要一次性加太多功能。</p><p>每次只加一个，测试通过后再加下一个。</p><p>这样出问题时，你能很快定位是哪个改动导致的。</p></div><p>→ <a href="./5.4.4-optimize.html">5.4.4 代码优化：让 AI 帮你改进代码质量</a></p>`,55)])])}const b=s(e,[["render",l]]);export{u as __pageData,b as default};
