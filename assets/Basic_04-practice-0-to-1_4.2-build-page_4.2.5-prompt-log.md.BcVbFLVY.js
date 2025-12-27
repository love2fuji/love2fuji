import{_ as a,c as n,o as i,a3 as p}from"./chunks/framework.CUcrqFol.js";const g=JSON.parse('{"title":"4.2.5 完整 Prompt 对话记录","description":"4.2.5 完整 Prompt 对话记录 **本节目标**：回顾从零到静态页面的完整对话过程，作为你的参考模板 为什么要记录对话？ 记录完整的对话过程有几个好处： **可复现**：如果换一个项目，你可以参照这个流程 **可学习**：回看每一轮用了什么技巧，加深理解 **可排错**：如果后续出问题，可以回顾哪里可能出错","frontmatter":{"title":"4.2.5 完整 Prompt 对话记录","order":6},"headers":[],"relativePath":"Basic/04-practice-0-to-1/4.2-build-page/4.2.5-prompt-log.md","filePath":"Basic/04-practice-0-to-1/4.2-build-page/4.2.5-prompt-log.md","lastUpdated":1765094268000}'),t={name:"Basic/04-practice-0-to-1/4.2-build-page/4.2.5-prompt-log.md"};function l(e,s,o,h,r,d){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_4-2-5-完整-prompt-对话记录" tabindex="-1">4.2.5 完整 Prompt 对话记录 <a class="header-anchor" href="#_4-2-5-完整-prompt-对话记录" aria-label="Permalink to &quot;4.2.5 完整 Prompt 对话记录&quot;">​</a></h1><blockquote><p><strong>本节目标</strong>：回顾从零到静态页面的完整对话过程，作为你的参考模板</p></blockquote><h2 id="为什么要记录对话" tabindex="-1">为什么要记录对话？ <a class="header-anchor" href="#为什么要记录对话" aria-label="Permalink to &quot;为什么要记录对话？&quot;">​</a></h2><p>记录完整的对话过程有几个好处：</p><ol><li><strong>可复现</strong>：如果换一个项目，你可以参照这个流程</li><li><strong>可学习</strong>：回看每一轮用了什么技巧，加深理解</li><li><strong>可排错</strong>：如果后续出问题，可以回顾哪里可能出错</li></ol><h2 id="完整对话记录示例" tabindex="-1">完整对话记录示例 <a class="header-anchor" href="#完整对话记录示例" aria-label="Permalink to &quot;完整对话记录示例&quot;">​</a></h2><p>以下是小李完成第一轮静态页面的完整对话过程。</p><h3 id="第-1-轮-初始生成" tabindex="-1">第 1 轮：初始生成 <a class="header-anchor" href="#第-1-轮-初始生成" aria-label="Permalink to &quot;第 1 轮：初始生成&quot;">​</a></h3><p><strong>小李发送</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【Situation - 情境】</span></span>
<span class="line"><span>我是一个编程零基础的初学者，正在学习用 AI 做一个个人待办清单网页。</span></span>
<span class="line"><span>这是我的第一个 AI 编程项目。</span></span>
<span class="line"><span>目标用户是像我一样容易忘事的职场新人，需要一个简单的任务管理工具。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【Challenge - 挑战】</span></span>
<span class="line"><span>请帮我生成待办清单的静态页面，包含以下元素：</span></span>
<span class="line"><span>1. 页面标题：&quot;我的待办清单&quot;</span></span>
<span class="line"><span>2. 输入区域：</span></span>
<span class="line"><span>   - 一个输入框（用于输入新任务）</span></span>
<span class="line"><span>   - 一个&quot;添加&quot;按钮</span></span>
<span class="line"><span>3. 任务列表区域：</span></span>
<span class="line"><span>   - 先用 3 条假数据展示样式</span></span>
<span class="line"><span>   - 每个任务显示任务内容</span></span>
<span class="line"><span>   - 每个任务右侧有&quot;完成&quot;按钮和&quot;删除&quot;按钮</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【Audience - 受众】</span></span>
<span class="line"><span>代码将由我这个初学者阅读和修改，请保持简单易懂，在关键位置添加中文注释。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【Format - 格式】</span></span>
<span class="line"><span>请生成一个完整的 HTML 文件，包含内嵌的 CSS 样式。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【Foundations - 基础约束】</span></span>
<span class="line"><span>- 只做静态页面，暂时不需要 JavaScript 功能</span></span>
<span class="line"><span>- 不使用任何外部框架</span></span>
<span class="line"><span>- 现代简约风格，配色清新</span></span>
<span class="line"><span>- 响应式设计，手机上也能正常显示</span></span></code></pre></div><p><strong>AI 回复</strong>：[生成 HTML + CSS 代码，页面包含基本结构]</p><p><strong>使用的技巧</strong>：</p><ul><li>✓ S.C.A.F.F. 完整框架</li><li>✓ 明确说明是初学者（降低代码复杂度）</li><li>✓ 具体列出页面元素（避免遗漏）</li><li>✓ 明确技术约束（不用框架，纯 HTML+CSS）</li></ul><p><strong>小李的检查结果</strong>：</p><ul><li>✅ 结构完整，所有元素都在</li><li>⚠️ 按钮样式有点普通</li><li>⚠️ 整体配色偏暗</li></ul><h3 id="第-2-轮-调整配色和按钮" tabindex="-1">第 2 轮：调整配色和按钮 <a class="header-anchor" href="#第-2-轮-调整配色和按钮" aria-label="Permalink to &quot;第 2 轮：调整配色和按钮&quot;">​</a></h3><p><strong>小李发送</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>整体结构很好！请做以下调整：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 配色问题：</span></span>
<span class="line"><span>   - 背景改成更浅的灰色（#f8fafc）</span></span>
<span class="line"><span>   - 主色调用明亮的蓝色（#3b82f6）</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>2. 按钮样式：</span></span>
<span class="line"><span>   - &quot;添加&quot;按钮改成圆角（8px），背景用蓝色，文字白色</span></span>
<span class="line"><span>   - 鼠标悬停时颜色加深</span></span>
<span class="line"><span>   - &quot;完成&quot;按钮用绿色（#10b981），&quot;删除&quot;按钮用红色（#ef4444）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其他部分保持不变。</span></span></code></pre></div><p><strong>AI 回复</strong>：[更新后的代码，配色和按钮样式已调整]</p><p><strong>使用的技巧</strong>：</p><ul><li>✓ 具体的颜色值（不是&quot;好看的颜色&quot;）</li><li>✓ 明确指出要保留的部分（&quot;其他部分保持不变&quot;）</li><li>✓ 一次只调整一类问题（配色 + 按钮）</li></ul><p><strong>小李的检查结果</strong>：</p><ul><li>✅ 配色清新多了</li><li>✅ 按钮好看了</li><li>⚠️ 任务之间间距太小</li></ul><h3 id="第-3-轮-调整间距" tabindex="-1">第 3 轮：调整间距 <a class="header-anchor" href="#第-3-轮-调整间距" aria-label="Permalink to &quot;第 3 轮：调整间距&quot;">​</a></h3><p><strong>小李发送</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>颜色很好！请调整一下间距：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 任务列表的每一项之间增加 12px 的间距</span></span>
<span class="line"><span>2. 每个任务加一条浅灰色的底边框（颜色用 #e5e7eb）</span></span>
<span class="line"><span>3. 任务右侧的&quot;完成&quot;和&quot;删除&quot;按钮之间留 8px 间距</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配色和其他样式保持不变。</span></span></code></pre></div><p><strong>AI 回复</strong>：[最终版本代码，间距已调整]</p><p><strong>使用的技巧</strong>：</p><ul><li>✓ 具体的像素值（12px、8px）</li><li>✓ 具体的颜色值（#e5e7eb）</li><li>✓ 再次强调保留已满意的部分</li></ul><p><strong>小李的检查结果</strong>：</p><ul><li>✅ 间距舒适</li><li>✅ 视觉层次清晰</li><li>✅ 整体满意，可以进入下一轮</li></ul><h3 id="第-4-轮-最后确认" tabindex="-1">第 4 轮：最后确认 <a class="header-anchor" href="#第-4-轮-最后确认" aria-label="Permalink to &quot;第 4 轮：最后确认&quot;">​</a></h3><p><strong>小李发送</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>看起来很不错了！请帮我确认一下：</span></span>
<span class="line"><span>1. 页面在手机宽度（375px）下显示是否正常？</span></span>
<span class="line"><span>2. 如果有问题，请修复。</span></span></code></pre></div><p><strong>AI 回复</strong>：[确认响应式正常，或者提供修复后的代码]</p><p><strong>使用的技巧</strong>：</p><ul><li>✓ 主动确认潜在问题</li><li>✓ 给出具体的测试条件（375px）</li></ul><h2 id="对话中使用的技巧汇总" tabindex="-1">对话中使用的技巧汇总 <a class="header-anchor" href="#对话中使用的技巧汇总" aria-label="Permalink to &quot;对话中使用的技巧汇总&quot;">​</a></h2><table tabindex="0"><thead><tr><th>轮次</th><th>主要技巧</th><th>来自章节</th></tr></thead><tbody><tr><td>第 1 轮</td><td>S.C.A.F.F. 框架</td><td>3.2.2</td></tr><tr><td>第 2 轮</td><td>具体描述 + 保留好的部分</td><td>3.5.3</td></tr><tr><td>第 3 轮</td><td>渐进式调整</td><td>3.5.2</td></tr><tr><td>第 4 轮</td><td>主动验证</td><td>3.5.3</td></tr></tbody></table><h2 id="这段对话可以改进的地方" tabindex="-1">这段对话可以改进的地方 <a class="header-anchor" href="#这段对话可以改进的地方" aria-label="Permalink to &quot;这段对话可以改进的地方&quot;">​</a></h2><p>回顾这段对话，有几个地方可以做得更好：</p><h3 id="_1-第一轮可以更具体" tabindex="-1">1. 第一轮可以更具体 <a class="header-anchor" href="#_1-第一轮可以更具体" aria-label="Permalink to &quot;1. 第一轮可以更具体&quot;">​</a></h3><p>原版：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>现代简约风格，配色清新</span></span></code></pre></div><p>改进版：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>参考苹果备忘录的风格，纯白背景，圆角卡片，主色调用蓝色（#3b82f6）</span></span></code></pre></div><p><strong>教训</strong>：第一轮就给出具体的风格参考和颜色，可以减少后续调整轮数。</p><h3 id="_2-可以合并第-2、3-轮" tabindex="-1">2. 可以合并第 2、3 轮 <a class="header-anchor" href="#_2-可以合并第-2、3-轮" aria-label="Permalink to &quot;2. 可以合并第 2、3 轮&quot;">​</a></h3><p>如果一开始就把配色和间距问题一起说，可以省一轮对话：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请做以下调整：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配色：</span></span>
<span class="line"><span>- 背景用 #f8fafc</span></span>
<span class="line"><span>- 主色调用 #3b82f6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>按钮：</span></span>
<span class="line"><span>- 圆角 8px，悬停时颜色加深</span></span>
<span class="line"><span>- &quot;完成&quot;用绿色，&quot;删除&quot;用红色</span></span>
<span class="line"><span></span></span>
<span class="line"><span>间距：</span></span>
<span class="line"><span>- 任务之间 12px 间距</span></span>
<span class="line"><span>- 按钮之间 8px 间距</span></span></code></pre></div><p><strong>教训</strong>：如果问题明确，可以一次提多个调整，节省对话轮数。</p><h3 id="_3-第-4-轮可以更早做" tabindex="-1">3. 第 4 轮可以更早做 <a class="header-anchor" href="#_3-第-4-轮可以更早做" aria-label="Permalink to &quot;3. 第 4 轮可以更早做&quot;">​</a></h3><p>响应式测试可以在第 1 轮生成后就做，不用等到最后。</p><p><strong>教训</strong>：核心功能和响应式要尽早验证，发现问题早修复。</p><h2 id="你的对话记录模板" tabindex="-1">你的对话记录模板 <a class="header-anchor" href="#你的对话记录模板" aria-label="Permalink to &quot;你的对话记录模板&quot;">​</a></h2><p>你可以用这个模板记录自己的对话过程：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">项目名称</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 日期：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">日期</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 第 1 轮</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**我发送**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[你的 Prompt]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**AI 回复**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[简要描述 AI 做了什么]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**检查结果**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ✅ [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">好的地方</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ⚠️ [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">需要改进的地方</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 第 2 轮</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p>记录对话不是必须的，但如果你想回顾学习过程，或者以后遇到类似项目想参考，这会很有帮助。</p><h2 id="本节小结" tabindex="-1">本节小结 <a class="header-anchor" href="#本节小结" aria-label="Permalink to &quot;本节小结&quot;">​</a></h2><p>通过这个完整的对话记录，你可以看到：</p><ol><li><strong>第一轮用 S.C.A.F.F. 框架</strong>，给 AI 充分的上下文</li><li><strong>后续轮次用具体描述</strong>，一次调整一类问题</li><li><strong>每轮都检查结果</strong>，确认哪些满意、哪些需要改进</li><li><strong>3-4 轮对话</strong>是正常的，不要期望一次完美</li></ol><p>现在，你可以进入第二轮，让页面&quot;活&quot;起来了。</p><p>→ <a href="./../4.3-core-features/">4.3 第二轮：实现核心功能</a></p>`,63)])])}const k=a(t,[["render",l]]);export{g as __pageData,k as default};
