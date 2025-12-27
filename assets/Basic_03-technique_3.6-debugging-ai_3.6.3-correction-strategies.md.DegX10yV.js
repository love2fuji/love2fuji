import{_ as a,c as n,o as i,a3 as p}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"3.6.3 修正策略：怎么让 AI 改对","description":"3.6.3 修正策略：怎么让 AI 改对 经过本节学习，你将掌握 四种修正策略及其适用场景 「错误驱动开发」的工作流程 识别「死亡螺旋」的信号并及时止损 获得一套可直接使用的修正 Prompt 模板 四种修正策略 在 3.5.3 中，我们学了如何给 AI 有效的反馈。本节聚焦于**问题已经发生后**的修正策略——当 A","frontmatter":{"title":"3.6.3 修正策略：怎么让 AI 改对"},"headers":[],"relativePath":"Basic/03-technique/3.6-debugging-ai/3.6.3-correction-strategies.md","filePath":"Basic/03-technique/3.6-debugging-ai/3.6.3-correction-strategies.md","lastUpdated":1765094268000}'),t={name:"Basic/03-technique/3.6-debugging-ai/3.6.3-correction-strategies.md"};function l(e,s,h,d,o,r){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="_3-6-3-修正策略-怎么让-ai-改对" tabindex="-1">3.6.3 修正策略：怎么让 AI 改对 <a class="header-anchor" href="#_3-6-3-修正策略-怎么让-ai-改对" aria-label="Permalink to &quot;3.6.3 修正策略：怎么让 AI 改对&quot;">​</a></h1><h2 id="经过本节学习-你将掌握" tabindex="-1">经过本节学习，你将掌握 <a class="header-anchor" href="#经过本节学习-你将掌握" aria-label="Permalink to &quot;经过本节学习，你将掌握&quot;">​</a></h2><ul><li>四种修正策略及其适用场景</li><li>「错误驱动开发」的工作流程</li><li>识别「死亡螺旋」的信号并及时止损</li><li>获得一套可直接使用的修正 Prompt 模板</li></ul><h2 id="四种修正策略" tabindex="-1">四种修正策略 <a class="header-anchor" href="#四种修正策略" aria-label="Permalink to &quot;四种修正策略&quot;">​</a></h2><p>在 3.5.3 中，我们学了如何给 AI 有效的反馈。本节聚焦于<strong>问题已经发生后</strong>的修正策略——当 AI 给的代码有问题时，如何引导它改对。</p><table tabindex="0"><thead><tr><th>策略</th><th>适用场景</th><th>核心思路</th></tr></thead><tbody><tr><td>精确指出问题</td><td>你知道具体哪里错了</td><td>给出位置 + 问题 + 期望</td></tr><tr><td>给出正确示例</td><td>格式或结构不对</td><td>展示正确的「样子」</td></tr><tr><td>分步重做</td><td>任务太复杂导致出错</td><td>拆解后逐个完成</td></tr><tr><td>换种问法</td><td>同一问法反复失败</td><td>改变描述角度或方式</td></tr></tbody></table><h3 id="策略一-精确指出问题" tabindex="-1">策略一：精确指出问题 <a class="header-anchor" href="#策略一-精确指出问题" aria-label="Permalink to &quot;策略一：精确指出问题&quot;">​</a></h3><p><strong>适用场景</strong>：你能定位到具体是哪行代码、哪个函数有问题。</p><p><strong>Prompt 模板</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你在 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">位置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 的代码有问题：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**问题**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">描述具体问题</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**当前行为**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">代码现在做了什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**期望行为**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">代码应该做什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请修正这个问题，其他部分保持不变。</span></span></code></pre></div><p><strong>示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你在 handleSubmit 函数第 15 行的代码有问题：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**问题**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：使用了 localStorage，但这是服务端渲染项目</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**当前行为**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：直接调用 localStorage.setItem()，在服务端会报错</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**期望行为**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：先检查是否在浏览器环境，或者使用 cookies</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请修正这个问题，其他部分保持不变。</span></span></code></pre></div><h3 id="策略二-给出正确示例" tabindex="-1">策略二：给出正确示例 <a class="header-anchor" href="#策略二-给出正确示例" aria-label="Permalink to &quot;策略二：给出正确示例&quot;">​</a></h3><p><strong>适用场景</strong>：AI 理解了任务，但输出的格式、结构不符合你的要求。</p><p><strong>Prompt 模板</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">输出格式不对。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**当前格式**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[展示 AI 给的格式]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**期望格式**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">展示你想要的格式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请按期望格式重新输出。</span></span></code></pre></div><p><strong>示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">函数返回格式不对。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**当前格式**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">直接返回数据，如 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`return userData\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**期望格式**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">统一返回格式 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`{ success: boolean, data: any, error?: string }\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">成功时：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`{ success: true, data: userData }\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">失败时：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`{ success: false, data: null, error: &quot;错误信息&quot; }\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请按期望格式修改所有 API 函数的返回值。</span></span></code></pre></div><h3 id="策略三-分步重做" tabindex="-1">策略三：分步重做 <a class="header-anchor" href="#策略三-分步重做" aria-label="Permalink to &quot;策略三：分步重做&quot;">​</a></h3><p><strong>适用场景</strong>：任务太复杂，AI 一次性输出的代码问题较多，修补不如重来。</p><p><strong>Prompt 模板</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这个功能我们分步骤来做。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**第一步（当前）**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">最小核心功能</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">只需要实现这一个功能，其他的后面再加。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">完成后我会确认，然后我们再做第二步。</span></span></code></pre></div><p><strong>示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用户认证功能我们分步骤来做。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**第一步（当前）**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：只实现用户注册</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 邮箱 + 密码表单</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 基本的格式验证</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 存储到数据库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不需要：登录、找回密码、邮箱验证、JWT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">完成后我会确认，然后我们再做登录功能。</span></span></code></pre></div><h3 id="策略四-换种问法" tabindex="-1">策略四：换种问法 <a class="header-anchor" href="#策略四-换种问法" aria-label="Permalink to &quot;策略四：换种问法&quot;">​</a></h3><p><strong>适用场景</strong>：同一个问题，用同样的方式问了两三次，AI 还是给出类似的错误答案。</p><p><strong>可以尝试的角度转换</strong>：</p><table tabindex="0"><thead><tr><th>原问法</th><th>换种问法</th></tr></thead><tbody><tr><td>直接要结果</td><td>先问原理，再让 AI 基于原理实现</td></tr><tr><td>用技术术语</td><td>用生活化语言描述需求</td></tr><tr><td>描述「要什么」</td><td>描述「解决什么问题」</td></tr><tr><td>从功能角度问</td><td>从用户角度描述场景</td></tr></tbody></table><p><strong>示例</strong>：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">原问法（反复失败）：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;写一个防抖函数&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">换种问法：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;用户在搜索框输入时，我不想每敲一个字就触发搜索请求，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">而是希望用户停止输入 300 毫秒后再发起请求。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我实现这个延迟触发的逻辑。&quot;</span></span></code></pre></div><h2 id="错误驱动开发-把-ai-变成调试助手" tabindex="-1">错误驱动开发：把 AI 变成调试助手 <a class="header-anchor" href="#错误驱动开发-把-ai-变成调试助手" aria-label="Permalink to &quot;错误驱动开发：把 AI 变成调试助手&quot;">​</a></h2><p>当你遇到错误时，不必自己分析——可以直接把错误信息扔给 AI，让它帮你定位和修复。</p><h3 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>发现错误 → 复制完整错误信息 → 给 AI 分析 → 应用修复 → 验证 → 如有新错误则重复</span></span></code></pre></div><h3 id="操作模板" tabindex="-1">操作模板 <a class="header-anchor" href="#操作模板" aria-label="Permalink to &quot;操作模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">运行代码时遇到以下错误：</span></span></code></pre></div><p>[粘贴完整的错误信息]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>相关代码：</span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[粘贴相关代码片段]</span></span></code></pre></div><p>请分析错误原因，并给出修复方案。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>运行代码时遇到以下错误：</span></span></code></pre></div><p>TypeError: Cannot read properties of undefined (reading &#39;map&#39;) at UserList (UserList.jsx:12:23)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>相关代码：</span></span>
<span class="line"><span>\`\`\`jsx</span></span>
<span class="line"><span>function UserList({ users }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      {users.map(user =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)}</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>请分析错误原因，并给出修复方案。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**AI 通常会告诉你**：</span></span>
<span class="line"><span>- 错误原因：\`users\` 可能是 \`undefined\`</span></span>
<span class="line"><span>- 修复方案：添加空值检查或默认值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 警惕「死亡螺旋」</span></span>
<span class="line"><span></span></span>
<span class="line"><span>「死亡螺旋」是指：你让 AI 修问题，它修了一个又引入两个新问题；你再让它修，问题越来越多，代码越来越乱。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 识别信号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 🚨 修改轮次超过 3 次，问题还没解决</span></span>
<span class="line"><span>- 🚨 AI 的代码量越改越多、越改越复杂</span></span>
<span class="line"><span>- 🚨 修了 A 问题，B 功能又坏了</span></span>
<span class="line"><span>- 🚨 AI 开始「绕圈」，给出的方案和之前类似</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 止损策略</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一旦识别到死亡螺旋，果断止损：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**选项 1：回退重来**</span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>这个方向走不通。请忘掉之前的修改，我们从头开始。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[重新清晰地描述需求，可能需要拆分成更小的任务]</span></span></code></pre></div><p><strong>选项 2：保留能用的，手动修复剩余部分</strong></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请把目前能正常工作的代码整理一下给我，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">有问题的部分用注释标注出来，我自己来修。</span></span></code></pre></div><p><strong>选项 3：换一个 AI 工具试试</strong></p><p>不同的 AI 模型在不同任务上表现不同。如果一个工具反复卡住，换一个试试可能会有惊喜。</p><h2 id="修正-prompt-模板库" tabindex="-1">修正 Prompt 模板库 <a class="header-anchor" href="#修正-prompt-模板库" aria-label="Permalink to &quot;修正 Prompt 模板库&quot;">​</a></h2><h3 id="修复运行时错误" tabindex="-1">修复运行时错误 <a class="header-anchor" href="#修复运行时错误" aria-label="Permalink to &quot;修复运行时错误&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这段代码报错了：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">错误信息：</span></span></code></pre></div><p>[错误信息]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[代码]</span></span></code></pre></div><p>请修复这个错误。如果需要更多上下文，请告诉我需要什么信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 修复逻辑错误</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>这段代码可以运行，但结果不对：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**输入**：[描述输入]</span></span>
<span class="line"><span>**期望输出**：[描述期望结果]</span></span>
<span class="line"><span>**实际输出**：[描述实际结果]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[代码]</span></span></code></pre></div><p>请找出逻辑问题并修复。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 修复样式问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>样式和预期不符：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**期望效果**：[描述或截图链接]</span></span>
<span class="line"><span>**实际效果**：[描述当前问题]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当前代码：</span></span>
<span class="line"><span>\`\`\`css</span></span>
<span class="line"><span>[样式代码]</span></span></code></pre></div><p>请修改样式使其符合期望效果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 要求 AI 自查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>请检查上面的代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 有哪些潜在的边界情况没有处理？</span></span>
<span class="line"><span>2. 有哪些可能导致运行时错误的地方？</span></span>
<span class="line"><span>3. 有哪些可以优化的地方？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>列出问题后，请给出修复后的完整代码。</span></span></code></pre></div><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><p>✓ <strong>四种修正策略</strong>：精确指出 → 给出示例 → 分步重做 → 换种问法</p><p>✓ <strong>错误驱动开发</strong>：把错误信息直接扔给 AI，让它帮你定位和修复</p><p>✓ <strong>警惕死亡螺旋</strong>：修改超过 3 轮还没解决，果断止损重来</p><p>✓ <strong>模板库</strong>：积累常用的修正 Prompt，提高修复效率</p><p>但有时候，问题不在于怎么修正，而是 AI 真的做不到。下一节我们来看兜底策略——当 AI 真的搞不定时该怎么办。</p>`,65)])])}const g=a(t,[["render",l]]);export{c as __pageData,g as default};
