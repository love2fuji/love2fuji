import{_ as s,c as n,o as p,a3 as i}from"./chunks/framework.CUcrqFol.js";const k=JSON.parse('{"title":"3.3.3 Chain of Thought：让 AI \\"想一想\\"再回答","description":"3.3.3 Chain of Thought：让 AI \\"想一想\\"再回答 经过本节学习，你将掌握 Chain of Thought（CoT）的定义和原理 两种触发 CoT 的方式 CoT 真正有效的场景（基于最新研究） 如何写出有效的 CoT 提示词 CoT 的局限性和注意事项 什么是 Chain of Thought","frontmatter":{"title":"3.3.3 Chain of Thought：让 AI \\"想一想\\"再回答"},"headers":[],"relativePath":"Basic/03-technique/3.3-advanced-techniques/3.3.3-chain-of-thought.md","filePath":"Basic/03-technique/3.3-advanced-techniques/3.3.3-chain-of-thought.md","lastUpdated":1765094268000}'),t={name:"Basic/03-technique/3.3-advanced-techniques/3.3.3-chain-of-thought.md"};function e(l,a,h,d,o,c){return p(),n("div",null,[...a[0]||(a[0]=[i(`<h1 id="_3-3-3-chain-of-thought-让-ai-想一想-再回答" tabindex="-1">3.3.3 Chain of Thought：让 AI &quot;想一想&quot;再回答 <a class="header-anchor" href="#_3-3-3-chain-of-thought-让-ai-想一想-再回答" aria-label="Permalink to &quot;3.3.3 Chain of Thought：让 AI &quot;想一想&quot;再回答&quot;">​</a></h1><h2 id="经过本节学习-你将掌握" tabindex="-1">经过本节学习，你将掌握 <a class="header-anchor" href="#经过本节学习-你将掌握" aria-label="Permalink to &quot;经过本节学习，你将掌握&quot;">​</a></h2><ul><li>Chain of Thought（CoT）的定义和原理</li><li>两种触发 CoT 的方式</li><li>CoT 真正有效的场景（基于最新研究）</li><li>如何写出有效的 CoT 提示词</li><li>CoT 的局限性和注意事项</li></ul><h2 id="什么是-chain-of-thought" tabindex="-1">什么是 Chain of Thought <a class="header-anchor" href="#什么是-chain-of-thought" aria-label="Permalink to &quot;什么是 Chain of Thought&quot;">​</a></h2><p>Chain of Thought（思维链，简称 CoT）的核心思想是：<strong>让 AI 把推理过程写出来，而不是直接给答案</strong>。</p><p>就像数学考试要求「写出解题步骤」一样，当 AI 被要求展示思考过程时，往往能得到更准确的答案。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 直接问：</span></span>
<span class="line"><span>这个函数的时间复杂度是多少？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 用 CoT：</span></span>
<span class="line"><span>请分析这个函数的时间复杂度。</span></span>
<span class="line"><span>首先，识别代码中的循环结构；</span></span>
<span class="line"><span>然后，分析每个循环的执行次数；</span></span>
<span class="line"><span>最后，计算总的时间复杂度。</span></span></code></pre></div><h2 id="核心洞见-cot-并非万能" tabindex="-1">核心洞见：CoT 并非万能 <a class="header-anchor" href="#核心洞见-cot-并非万能" aria-label="Permalink to &quot;核心洞见：CoT 并非万能&quot;">​</a></h2><blockquote><p>&quot;Chain of Thought 主要在数学和符号推理任务上有显著效果，对其他类型任务的收益有限。&quot; —— 2024 年论文《To CoT or not to CoT?》</p></blockquote><p>这个研究结论很重要。它告诉我们：</p><table tabindex="0"><thead><tr><th>任务类型</th><th>CoT 效果</th><th>原因</th></tr></thead><tbody><tr><td>数学计算</td><td>✅ 显著提升</td><td>需要多步推理，步骤分解有帮助</td></tr><tr><td>逻辑推理</td><td>✅ 明显提升</td><td>复杂逻辑需要逐步梳理</td></tr><tr><td>代码分析</td><td>✅ 有帮助</td><td>涉及多层嵌套和条件判断</td></tr><tr><td>文本生成</td><td>⚠️ 收益有限</td><td>创意任务不需要严格推理</td></tr><tr><td>简单分类</td><td>❌ 可能更慢</td><td>增加不必要的步骤</td></tr></tbody></table><p><strong>实践建议</strong>：不要对所有任务都用 CoT，只在需要推理的场景使用。</p><h2 id="两种触发方式" tabindex="-1">两种触发方式 <a class="header-anchor" href="#两种触发方式" aria-label="Permalink to &quot;两种触发方式&quot;">​</a></h2><h3 id="方式一-魔法咒语" tabindex="-1">方式一：魔法咒语 <a class="header-anchor" href="#方式一-魔法咒语" aria-label="Permalink to &quot;方式一：魔法咒语&quot;">​</a></h3><p>最简单的方式，只需在提示词末尾加一句话：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请分析这段代码的性能瓶颈。</span></span>
<span class="line"><span>Let&#39;s think step by step.</span></span></code></pre></div><p>或者中文版：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请分析这段代码的性能瓶颈。</span></span>
<span class="line"><span>让我们一步一步来思考。</span></span></code></pre></div><p>这种方式简单，但 AI 的推理步骤可能不够结构化。</p><h3 id="方式二-显式步骤分解" tabindex="-1">方式二：显式步骤分解 <a class="header-anchor" href="#方式二-显式步骤分解" aria-label="Permalink to &quot;方式二：显式步骤分解&quot;">​</a></h3><p>更可控的方式，直接告诉 AI 该怎么分步：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请分析这段代码的性能瓶颈。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析步骤：</span></span>
<span class="line"><span>1. 首先，识别代码中的循环和递归结构</span></span>
<span class="line"><span>2. 然后，找出可能的重复计算</span></span>
<span class="line"><span>3. 接着，检查数据结构的选择是否合理</span></span>
<span class="line"><span>4. 最后，给出优化建议及预期效果</span></span></code></pre></div><p>这种方式的输出更结构化，适合需要特定分析角度的场景。</p><h2 id="差提示词-vs-好提示词" tabindex="-1">差提示词 vs 好提示词 <a class="header-anchor" href="#差提示词-vs-好提示词" aria-label="Permalink to &quot;差提示词 vs 好提示词&quot;">​</a></h2><h3 id="场景-分析表单验证逻辑" tabindex="-1">场景：分析表单验证逻辑 <a class="header-anchor" href="#场景-分析表单验证逻辑" aria-label="Permalink to &quot;场景：分析表单验证逻辑&quot;">​</a></h3><h3 id="❌-差提示词" tabindex="-1">❌ 差提示词 <a class="header-anchor" href="#❌-差提示词" aria-label="Permalink to &quot;❌ 差提示词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这个表单验证逻辑有问题吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function validateForm(data) {</span></span>
<span class="line"><span>  if (data.email &amp;&amp; data.password &amp;&amp; data.password.length &gt;= 6) {</span></span>
<span class="line"><span>    if (data.email.includes(&#39;@&#39;)) {</span></span>
<span class="line"><span>      return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>问题</strong>：AI 可能只给一个笼统的结论，遗漏一些边界情况。</p><h3 id="✅-好提示词-使用-cot" tabindex="-1">✅ 好提示词（使用 CoT） <a class="header-anchor" href="#✅-好提示词-使用-cot" aria-label="Permalink to &quot;✅ 好提示词（使用 CoT）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请审查这个表单验证函数，检查是否有遗漏的验证场景。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function validateForm(data) {</span></span>
<span class="line"><span>  if (data.email &amp;&amp; data.password &amp;&amp; data.password.length &gt;= 6) {</span></span>
<span class="line"><span>    if (data.email.includes(&#39;@&#39;)) {</span></span>
<span class="line"><span>      return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析步骤：</span></span>
<span class="line"><span>1. 首先，列出这个函数当前检查了哪些条件</span></span>
<span class="line"><span>2. 然后，思考常见的表单验证需要检查什么</span></span>
<span class="line"><span>3. 接着，对比找出遗漏的验证项</span></span>
<span class="line"><span>4. 最后，给出改进建议</span></span></code></pre></div><h3 id="好提示词的-ai-输出" tabindex="-1">好提示词的 AI 输出 <a class="header-anchor" href="#好提示词的-ai-输出" aria-label="Permalink to &quot;好提示词的 AI 输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>分析过程：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 当前检查的条件：</span></span>
<span class="line"><span>   - email 存在且非空</span></span>
<span class="line"><span>   - password 存在且非空</span></span>
<span class="line"><span>   - password 长度 &gt;= 6</span></span>
<span class="line"><span>   - email 包含 @ 符号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 常见表单验证需要检查：</span></span>
<span class="line"><span>   - email 格式完整性（@前后都要有内容，要有域名后缀）</span></span>
<span class="line"><span>   - password 强度（大小写、数字、特殊字符）</span></span>
<span class="line"><span>   - 防止 SQL 注入和 XSS</span></span>
<span class="line"><span>   - 空白字符处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 遗漏的验证项：</span></span>
<span class="line"><span>   - email 格式不完整：&quot;@&quot; 或 &quot;a@&quot; 或 &quot;@b&quot; 都能通过</span></span>
<span class="line"><span>   - password 只检查长度，没检查强度</span></span>
<span class="line"><span>   - 没有处理首尾空格</span></span>
<span class="line"><span>   - 没有验证 email 的域名后缀（如 .com）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 改进建议：</span></span>
<span class="line"><span>   - 使用正则表达式验证 email 格式</span></span>
<span class="line"><span>   - 添加密码强度检查</span></span>
<span class="line"><span>   - 对输入做 trim() 处理</span></span></code></pre></div><h2 id="适用场景决策表" tabindex="-1">适用场景决策表 <a class="header-anchor" href="#适用场景决策表" aria-label="Permalink to &quot;适用场景决策表&quot;">​</a></h2><table tabindex="0"><thead><tr><th>场景</th><th>是否使用 CoT</th><th>理由</th></tr></thead><tbody><tr><td>计算时间/空间复杂度</td><td>✅ 使用</td><td>需要分析循环嵌套</td></tr><tr><td>审查代码逻辑</td><td>✅ 使用</td><td>需要考虑多个分支和边界</td></tr><tr><td>设计数据库表结构</td><td>✅ 使用</td><td>需要分析实体关系</td></tr><tr><td>调试错误原因</td><td>✅ 使用</td><td>需要逐步排查</td></tr><tr><td>简单代码格式转换</td><td>❌ 不用</td><td>直接转换即可</td></tr><tr><td>写一段文案</td><td>❌ 不用</td><td>创意任务不需要严格推理</td></tr><tr><td>重命名变量</td><td>❌ 不用</td><td>任务过于简单</td></tr></tbody></table><h2 id="实战示例-待办清单项目" tabindex="-1">实战示例：待办清单项目 <a class="header-anchor" href="#实战示例-待办清单项目" aria-label="Permalink to &quot;实战示例：待办清单项目&quot;">​</a></h2><p>小李想让 AI 帮他分析一个 Bug：任务删除后，有时候页面没有更新。</p><h3 id="cot-提示词" tabindex="-1">CoT 提示词 <a class="header-anchor" href="#cot-提示词" aria-label="Permalink to &quot;CoT 提示词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我的待办清单应用有一个 Bug：删除任务后，页面有时候不更新。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下是相关代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 任务列表状态</span></span>
<span class="line"><span>const [tasks, setTasks] = useState([]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除任务</span></span>
<span class="line"><span>const deleteTask = (id) =&gt; {</span></span>
<span class="line"><span>  tasks.splice(tasks.findIndex(t =&gt; t.id === id), 1);</span></span>
<span class="line"><span>  setTasks(tasks);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我分析问题原因。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析步骤：</span></span>
<span class="line"><span>1. 首先，理解 React 状态更新的机制</span></span>
<span class="line"><span>2. 然后，检查这段代码的状态更新方式</span></span>
<span class="line"><span>3. 接着，找出导致不更新的原因</span></span>
<span class="line"><span>4. 最后，给出修复方案</span></span></code></pre></div><h3 id="ai-输出" tabindex="-1">AI 输出 <a class="header-anchor" href="#ai-输出" aria-label="Permalink to &quot;AI 输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>分析过程：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. React 状态更新机制：</span></span>
<span class="line"><span>   React 通过对比新旧状态的引用来决定是否重新渲染。</span></span>
<span class="line"><span>   如果状态对象的引用没变，React 认为状态没有改变。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 当前代码的问题：</span></span>
<span class="line"><span>   - splice() 直接修改了原数组</span></span>
<span class="line"><span>   - setTasks(tasks) 传入的还是同一个数组引用</span></span>
<span class="line"><span>   - React 对比发现引用相同，不触发重新渲染</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 问题根因：</span></span>
<span class="line"><span>   直接修改原数组（mutation）而非创建新数组（immutation）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 修复方案：</span></span>
<span class="line"><span>   使用 filter 创建新数组：</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   const deleteTask = (id) =&gt; {</span></span>
<span class="line"><span>     setTasks(tasks.filter(t =&gt; t.id !== id));</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   或者使用展开运算符：</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   const deleteTask = (id) =&gt; {</span></span>
<span class="line"><span>     const newTasks = [...tasks];</span></span>
<span class="line"><span>     newTasks.splice(newTasks.findIndex(t =&gt; t.id === id), 1);</span></span>
<span class="line"><span>     setTasks(newTasks);</span></span>
<span class="line"><span>   }</span></span></code></pre></div><h2 id="concise-cot-简洁版" tabindex="-1">Concise CoT：简洁版 <a class="header-anchor" href="#concise-cot-简洁版" aria-label="Permalink to &quot;Concise CoT：简洁版&quot;">​</a></h2><p>如果你希望节省 token，可以用简洁版 CoT：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请简要分析这个函数的时间复杂度，用 2-3 句话说明推理过程，然后给出结论。</span></span></code></pre></div><p>研究表明，Concise CoT 可以减少约 50% 的输出长度，同时保持大部分推理准确性。</p><h2 id="cot-的局限性" tabindex="-1">CoT 的局限性 <a class="header-anchor" href="#cot-的局限性" aria-label="Permalink to &quot;CoT 的局限性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>局限</th><th>表现</th><th>应对方法</th></tr></thead><tbody><tr><td>增加输出长度</td><td>Token 消耗增加 20-80%</td><td>用 Concise CoT 或限制字数</td></tr><tr><td>某些任务反而变差</td><td>简单任务强行分步可能出错</td><td>根据场景选择是否使用</td></tr><tr><td>推理可能出错</td><td>某一步错了，后续全错</td><td>配合 Self-Critique 检查</td></tr></tbody></table><h2 id="可复制模板" tabindex="-1">可复制模板 <a class="header-anchor" href="#可复制模板" aria-label="Permalink to &quot;可复制模板&quot;">​</a></h2><h3 id="代码分析-cot-模板" tabindex="-1">代码分析 CoT 模板 <a class="header-anchor" href="#代码分析-cot-模板" aria-label="Permalink to &quot;代码分析 CoT 模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请分析以下代码的 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">分析目标：性能/安全性/可维护性</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">代码</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">分析步骤：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 首先，[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">第一步分析角度</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 然后，[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">第二步分析角度</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 接着，[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">第三步分析角度</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 最后，给出结论和建议</span></span></code></pre></div><h3 id="问题排查-cot-模板" tabindex="-1">问题排查 CoT 模板 <a class="header-anchor" href="#问题排查-cot-模板" aria-label="Permalink to &quot;问题排查 CoT 模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">问题描述：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">问题现象</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">相关代码/配置：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">代码或配置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我分析问题原因。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">排查步骤：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 首先，理解正常情况下应该如何工作</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 然后，检查当前代码的执行流程</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 接着，定位可能导致问题的环节</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 最后，给出修复方案</span></span></code></pre></div><h3 id="简洁-cot-模板" tabindex="-1">简洁 CoT 模板 <a class="header-anchor" href="#简洁-cot-模板" aria-label="Permalink to &quot;简洁 CoT 模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请分析 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">任务</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用 2-3 句话说明你的推理过程，然后给出结论。</span></span></code></pre></div><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><p>✓ <strong>CoT 的本质</strong>：让 AI 展示推理过程，而非直接给答案</p><p>✓ <strong>有效场景</strong>：数学计算、逻辑推理、代码分析、问题排查</p><p>✓ <strong>两种触发方式</strong>：魔法咒语（简单）vs 显式步骤分解（可控）</p><p>✓ <strong>不要滥用</strong>：简单任务不需要 CoT，反而会降低效率</p><p>✓ <strong>Concise CoT</strong>：在需要节省 token 时使用简洁版</p><p>下一节，我们学习如何让 AI 探索多条路径——Tree of Thoughts。</p>`,60)])])}const u=s(t,[["render",e]]);export{k as __pageData,u as default};
