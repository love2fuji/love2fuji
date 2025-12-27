import{_ as s,c as n,o as p,a3 as t}from"./chunks/framework.CUcrqFol.js";const u=JSON.parse('{"title":"4.5.2 用 AI 帮你修 AI 的代码","description":"4.5.2 用 AI 帮你修 AI 的代码 经过本节学习，你将掌握： 向 AI 报告问题的标准流程 诊断、修复、验证的三个 Prompt 模板 避免无效沟通的常见误区 Debug 的三步流程 用 AI 修复代码问题，遵循「诊断 → 修复 → 验证」的三步流程： 每一步都有对应的 Prompt 模板。 第一步：诊断 Pr","frontmatter":{"title":"4.5.2 用 AI 帮你修 AI 的代码","order":3},"headers":[],"relativePath":"Basic/04-practice-0-to-1/4.5-debug/4.5.2-fix-with-ai.md","filePath":"Basic/04-practice-0-to-1/4.5-debug/4.5.2-fix-with-ai.md","lastUpdated":1765094268000}'),e={name:"Basic/04-practice-0-to-1/4.5-debug/4.5.2-fix-with-ai.md"};function l(i,a,d,c,o,r){return p(),n("div",null,[...a[0]||(a[0]=[t(`<h1 id="_4-5-2-用-ai-帮你修-ai-的代码" tabindex="-1">4.5.2 用 AI 帮你修 AI 的代码 <a class="header-anchor" href="#_4-5-2-用-ai-帮你修-ai-的代码" aria-label="Permalink to &quot;4.5.2 用 AI 帮你修 AI 的代码&quot;">​</a></h1><p>经过本节学习，你将掌握：</p><ul><li>向 AI 报告问题的标准流程</li><li>诊断、修复、验证的三个 Prompt 模板</li><li>避免无效沟通的常见误区</li></ul><h2 id="debug-的三步流程" tabindex="-1">Debug 的三步流程 <a class="header-anchor" href="#debug-的三步流程" aria-label="Permalink to &quot;Debug 的三步流程&quot;">​</a></h2><p>用 AI 修复代码问题，遵循「诊断 → 修复 → 验证」的三步流程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────┐    ┌─────────┐    ┌─────────┐</span></span>
<span class="line"><span>│  诊断   │ → │  修复   │ → │  验证   │</span></span>
<span class="line"><span>│ 找到原因 │    │ 获取方案 │    │ 确认解决 │</span></span>
<span class="line"><span>└─────────┘    └─────────┘    └─────────┘</span></span></code></pre></div><p>每一步都有对应的 Prompt 模板。</p><h2 id="第一步-诊断-prompt" tabindex="-1">第一步：诊断 Prompt <a class="header-anchor" href="#第一步-诊断-prompt" aria-label="Permalink to &quot;第一步：诊断 Prompt&quot;">​</a></h2><p>目标：让 AI 帮你分析问题原因，而不是直接给修复代码。</p><p><strong>诊断 Prompt 模板</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单代码出现了问题，请帮我分析原因。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【错误现象】</span></span>
<span class="line"><span>[描述你看到了什么]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【控制台报错】</span></span>
<span class="line"><span>[粘贴完整的报错信息，包括行号]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>[粘贴报错位置附近的代码，大约 10-20 行]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我分析：</span></span>
<span class="line"><span>1. 这个错误是什么意思？</span></span>
<span class="line"><span>2. 最可能的原因是什么？</span></span>
<span class="line"><span>3. 应该检查哪些地方？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>先不要给修复代码，我想先理解问题。</span></span></code></pre></div><p><strong>为什么先诊断</strong>：直接让 AI 修复，有时会「治标不治本」。先理解问题，你才能判断 AI 的修复方案是否靠谱。</p><p><strong>诊断 Prompt 示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单代码出现了问题，请帮我分析原因。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【错误现象】</span></span>
<span class="line"><span>点击添加按钮后，任务没有出现在列表中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【控制台报错】</span></span>
<span class="line"><span>Uncaught TypeError: Cannot read properties of undefined (reading &#39;push&#39;)</span></span>
<span class="line"><span>    at addTask (index.html:45:15)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>function addTask() {</span></span>
<span class="line"><span>    const input = document.querySelector(&#39;.task-input&#39;);</span></span>
<span class="line"><span>    const taskText = input.value.trim();</span></span>
<span class="line"><span>    if (taskText) {</span></span>
<span class="line"><span>        tasks.push({ text: taskText, completed: false });</span></span>
<span class="line"><span>        renderTasks();</span></span>
<span class="line"><span>        input.value = &#39;&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我分析：</span></span>
<span class="line"><span>1. 这个错误是什么意思？</span></span>
<span class="line"><span>2. 最可能的原因是什么？</span></span>
<span class="line"><span>3. 应该检查哪些地方？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>先不要给修复代码，我想先理解问题。</span></span></code></pre></div><h2 id="第二步-修复-prompt" tabindex="-1">第二步：修复 Prompt <a class="header-anchor" href="#第二步-修复-prompt" aria-label="Permalink to &quot;第二步：修复 Prompt&quot;">​</a></h2><p>目标：在理解问题后，让 AI 提供修复方案。</p><p><strong>修复 Prompt 模板</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>根据刚才的分析，请帮我修复这个问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【问题原因】</span></span>
<span class="line"><span>[用你自己的话复述 AI 分析的原因]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【修复要求】</span></span>
<span class="line"><span>1. 给出修复后的完整代码</span></span>
<span class="line"><span>2. 用注释标注修改的地方</span></span>
<span class="line"><span>3. 解释为什么这样修改能解决问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 保持原有的代码风格</span></span>
<span class="line"><span>- 不要改动其他功能</span></span>
<span class="line"><span>- 关键逻辑添加中文注释</span></span></code></pre></div><p><strong>修复 Prompt 示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>根据刚才的分析，请帮我修复这个问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【问题原因】</span></span>
<span class="line"><span>tasks 变量在使用前没有初始化，所以是 undefined，无法调用 push 方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【修复要求】</span></span>
<span class="line"><span>1. 给出修复后的完整代码</span></span>
<span class="line"><span>2. 用注释标注修改的地方</span></span>
<span class="line"><span>3. 解释为什么这样修改能解决问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 保持原有的代码风格</span></span>
<span class="line"><span>- 不要改动其他功能</span></span>
<span class="line"><span>- 关键逻辑添加中文注释</span></span></code></pre></div><h2 id="第三步-验证-prompt" tabindex="-1">第三步：验证 Prompt <a class="header-anchor" href="#第三步-验证-prompt" aria-label="Permalink to &quot;第三步：验证 Prompt&quot;">​</a></h2><p>目标：修改代码后，让 AI 帮你确认问题是否真正解决。</p><p><strong>验证 Prompt 模板</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我已经按照你的建议修改了代码。请帮我验证：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【修改后的代码】</span></span>
<span class="line"><span>[粘贴修改后的代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【当前状态】</span></span>
<span class="line"><span>[描述现在的运行情况]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请确认：</span></span>
<span class="line"><span>1. 原来的问题是否解决了？</span></span>
<span class="line"><span>2. 修改是否引入了新的问题？</span></span>
<span class="line"><span>3. 还有什么需要注意的地方？</span></span></code></pre></div><h2 id="有效信息采集清单" tabindex="-1">有效信息采集清单 <a class="header-anchor" href="#有效信息采集清单" aria-label="Permalink to &quot;有效信息采集清单&quot;">​</a></h2><p>向 AI 报告问题时，提供的信息越完整，AI 的回答越准确。</p><p><strong>必须提供的信息</strong>：</p><table tabindex="0"><thead><tr><th>信息类型</th><th>说明</th><th>获取方式</th></tr></thead><tbody><tr><td>错误现象</td><td>发生了什么</td><td>用自己的话描述</td></tr><tr><td>控制台报错</td><td>完整的报错文本</td><td>从控制台复制</td></tr><tr><td>相关代码</td><td>报错位置附近的代码</td><td>根据行号定位</td></tr></tbody></table><p><strong>建议提供的信息</strong>：</p><table tabindex="0"><thead><tr><th>信息类型</th><th>说明</th><th>获取方式</th></tr></thead><tbody><tr><td>你的操作步骤</td><td>做了什么导致报错</td><td>回忆并记录</td></tr><tr><td>之前的状态</td><td>报错前代码是否正常</td><td>回忆</td></tr><tr><td>已尝试的方法</td><td>你做过哪些尝试</td><td>记录</td></tr></tbody></table><h2 id="常见沟通误区" tabindex="-1">常见沟通误区 <a class="header-anchor" href="#常见沟通误区" aria-label="Permalink to &quot;常见沟通误区&quot;">​</a></h2><p>以下是一些无效的问题描述，以及如何改进：</p><h3 id="误区-1-描述太模糊" tabindex="-1">误区 1：描述太模糊 <a class="header-anchor" href="#误区-1-描述太模糊" aria-label="Permalink to &quot;误区 1：描述太模糊&quot;">​</a></h3><table tabindex="0"><thead><tr><th>无效描述</th><th>有效描述</th></tr></thead><tbody><tr><td>&quot;代码不工作&quot;</td><td>&quot;点击添加按钮后，任务没有出现在列表中&quot;</td></tr><tr><td>&quot;有个错误&quot;</td><td>&quot;控制台显示 TypeError: Cannot read properties of undefined&quot;</td></tr><tr><td>&quot;样式有问题&quot;</td><td>&quot;任务列表的背景色消失了，变成了白色&quot;</td></tr></tbody></table><h3 id="误区-2-不提供报错信息" tabindex="-1">误区 2：不提供报错信息 <a class="header-anchor" href="#误区-2-不提供报错信息" aria-label="Permalink to &quot;误区 2：不提供报错信息&quot;">​</a></h3><table tabindex="0"><thead><tr><th>无效做法</th><th>有效做法</th></tr></thead><tbody><tr><td>&quot;控制台有报错&quot;</td><td>复制完整的报错信息，包括行号</td></tr><tr><td>&quot;我看到红色文字&quot;</td><td>截图或复制红色文字的内容</td></tr></tbody></table><h3 id="误区-3-一次问太多问题" tabindex="-1">误区 3：一次问太多问题 <a class="header-anchor" href="#误区-3-一次问太多问题" aria-label="Permalink to &quot;误区 3：一次问太多问题&quot;">​</a></h3><table tabindex="0"><thead><tr><th>无效做法</th><th>有效做法</th></tr></thead><tbody><tr><td>&quot;添加不行，删除也不行，刷新还丢数据&quot;</td><td>先解决一个问题，确认修复后再处理下一个</td></tr></tbody></table><h3 id="误区-4-不提供代码上下文" tabindex="-1">误区 4：不提供代码上下文 <a class="header-anchor" href="#误区-4-不提供代码上下文" aria-label="Permalink to &quot;误区 4：不提供代码上下文&quot;">​</a></h3><table tabindex="0"><thead><tr><th>无效做法</th><th>有效做法</th></tr></thead><tbody><tr><td>&quot;第 45 行有问题&quot;</td><td>粘贴第 40-50 行的代码，让 AI 看到上下文</td></tr></tbody></table><h2 id="快速修复话术" tabindex="-1">快速修复话术 <a class="header-anchor" href="#快速修复话术" aria-label="Permalink to &quot;快速修复话术&quot;">​</a></h2><p>如果你想跳过诊断，直接让 AI 修复，可以用这个精简版话术：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单报错了：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【现象】[一句话描述]</span></span>
<span class="line"><span>【报错】[粘贴控制台报错]</span></span>
<span class="line"><span>【代码】</span></span>
<span class="line"><span>[粘贴相关代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请直接给我修复后的完整代码。</span></span></code></pre></div><p><strong>示例</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单报错了：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【现象】点击添加按钮没反应</span></span>
<span class="line"><span>【报错】Uncaught TypeError: Cannot read properties of undefined (reading &#39;push&#39;)</span></span>
<span class="line"><span>    at addTask (index.html:45:15)</span></span>
<span class="line"><span>【代码】</span></span>
<span class="line"><span>function addTask() {</span></span>
<span class="line"><span>    const input = document.querySelector(&#39;.task-input&#39;);</span></span>
<span class="line"><span>    const taskText = input.value.trim();</span></span>
<span class="line"><span>    if (taskText) {</span></span>
<span class="line"><span>        tasks.push({ text: taskText, completed: false });</span></span>
<span class="line"><span>        renderTasks();</span></span>
<span class="line"><span>        input.value = &#39;&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请直接给我修复后的完整代码。</span></span></code></pre></div><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><ul><li>Debug 遵循「诊断 → 修复 → 验证」三步流程</li><li>诊断时先理解问题，不急于要修复代码</li><li>提供完整信息：现象 + 报错 + 代码</li><li>避免模糊描述，一次只解决一个问题</li><li>快速修复话术适合简单问题，复杂问题建议走完整流程</li></ul><p>接下来，让我们通过真实案例，看看这些方法如何应用。</p><p>→ <a href="./4.5.3-real-cases.html">4.5.3 真实案例复盘</a></p>`,49)])])}const b=s(e,[["render",l]]);export{u as __pageData,b as default};
