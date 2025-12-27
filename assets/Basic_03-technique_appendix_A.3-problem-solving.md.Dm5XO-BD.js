import{_ as a,c as n,o as i,a3 as p}from"./chunks/framework.CUcrqFol.js";const r=JSON.parse('{"title":"A.3 问题解决类模板","description":"A.3 问题解决类模板 本节提供排查问题和寻求帮助的 Prompt 模板，覆盖错误排查、技术选型、概念解释等场景。 模板一：运行时错误排查 适用于：代码报错、程序崩溃、控制台报红 [完整粘贴错误信息，包括堆栈跟踪] [语言] [粘贴错误信息中提到的代码，以及上下文] 填写示例 TypeError: Cannot rea","frontmatter":{"title":"A.3 问题解决类模板"},"headers":[],"relativePath":"Basic/03-technique/appendix/A.3-problem-solving.md","filePath":"Basic/03-technique/appendix/A.3-problem-solving.md","lastUpdated":1765094268000}'),l={name:"Basic/03-technique/appendix/A.3-problem-solving.md"};function e(t,s,h,k,d,o){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="a-3-问题解决类模板" tabindex="-1">A.3 问题解决类模板 <a class="header-anchor" href="#a-3-问题解决类模板" aria-label="Permalink to &quot;A.3 问题解决类模板&quot;">​</a></h1><p>本节提供排查问题和寻求帮助的 Prompt 模板，覆盖错误排查、技术选型、概念解释等场景。</p><h2 id="模板一-运行时错误排查" tabindex="-1">模板一：运行时错误排查 <a class="header-anchor" href="#模板一-运行时错误排查" aria-label="Permalink to &quot;模板一：运行时错误排查&quot;">​</a></h2><p>适用于：代码报错、程序崩溃、控制台报红</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 错误信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">运行时遇到以下错误：</span></span></code></pre></div><p>[完整粘贴错误信息，包括堆栈跟踪]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 触发场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**操作步骤**：</span></span>
<span class="line"><span>1. [第一步做了什么]</span></span>
<span class="line"><span>2. [第二步做了什么]</span></span>
<span class="line"><span>3. [然后就报错了]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**触发频率**：[每次都报错/偶尔报错/特定条件下报错]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 相关代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>错误指向的代码：</span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[粘贴错误信息中提到的代码，以及上下文]</span></span></code></pre></div><h2 id="环境信息" tabindex="-1">环境信息 <a class="header-anchor" href="#环境信息" aria-label="Permalink to &quot;环境信息&quot;">​</a></h2><ul><li>运行环境：[浏览器版本/Node.js 版本/Python 版本]</li><li>框架版本：[React 18/Vue 3/...]</li><li>操作系统：[Windows/Mac/Linux]</li></ul><h2 id="已尝试的方法" tabindex="-1">已尝试的方法 <a class="header-anchor" href="#已尝试的方法" aria-label="Permalink to &quot;已尝试的方法&quot;">​</a></h2><ol><li>[尝试1]：结果 [成功/失败/部分解决]</li><li>[尝试2]：结果 [成功/失败/部分解决]</li></ol><h2 id="请帮我" tabindex="-1">请帮我 <a class="header-anchor" href="#请帮我" aria-label="Permalink to &quot;请帮我&quot;">​</a></h2><ol><li>分析错误的根本原因</li><li>给出修复方案</li><li>解释为什么会出现这个问题（帮助我理解）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 填写示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 错误信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行时遇到以下错误：</span></span></code></pre></div><p>TypeError: Cannot read properties of undefined (reading &#39;map&#39;) at TaskList (TaskList.tsx:15:23) at renderWithHooks (react-dom.development.js:14985:18) at mountIndeterminateComponent (react-dom.development.js:17811:13)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 触发场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**操作步骤**：</span></span>
<span class="line"><span>1. 打开应用首页</span></span>
<span class="line"><span>2. 页面加载时直接报错</span></span>
<span class="line"><span>3. 任务列表没有显示出来</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**触发频率**：每次刷新页面都报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 相关代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>错误指向的代码：</span></span>
<span class="line"><span>\`\`\`tsx</span></span>
<span class="line"><span>// TaskList.tsx</span></span>
<span class="line"><span>function TaskList({ tasks }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      {tasks.map(task =&gt; (          // 第 15 行</span></span>
<span class="line"><span>        &lt;li key={task.id}&gt;{task.title}&lt;/li&gt;</span></span>
<span class="line"><span>      ))}</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// App.tsx 中的调用</span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span>  const [tasks, setTasks] = useState();  // 注意这里</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return &lt;TaskList tasks={tasks} /&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="环境信息-1" tabindex="-1">环境信息 <a class="header-anchor" href="#环境信息-1" aria-label="Permalink to &quot;环境信息&quot;">​</a></h2><ul><li>运行环境：Chrome 120</li><li>框架版本：React 18.2.0 + TypeScript 5.0</li><li>操作系统：Mac</li></ul><h2 id="已尝试的方法-1" tabindex="-1">已尝试的方法 <a class="header-anchor" href="#已尝试的方法-1" aria-label="Permalink to &quot;已尝试的方法&quot;">​</a></h2><ol><li>检查 tasks 数据：console.log 发现是 undefined</li><li>刷新页面：问题依旧</li></ol><h2 id="请帮我-1" tabindex="-1">请帮我 <a class="header-anchor" href="#请帮我-1" aria-label="Permalink to &quot;请帮我&quot;">​</a></h2><ol><li>分析错误的根本原因</li><li>给出修复方案</li><li>解释为什么会出现这个问题</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板二：逻辑错误分析</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：代码能跑但结果不对</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 问题描述</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码可以运行，但结果不符合预期。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**期望行为**：[应该是什么结果]</span></span>
<span class="line"><span>**实际行为**：[实际得到什么结果]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 测试用例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 输入 | 期望输出 | 实际输出 | 是否正确 |</span></span>
<span class="line"><span>|-----|---------|---------|---------|</span></span>
<span class="line"><span>| [输入1] | [期望1] | [实际1] | ❌ |</span></span>
<span class="line"><span>| [输入2] | [期望2] | [实际2] | ❌ |</span></span>
<span class="line"><span>| [输入3] | [期望3] | [实际3] | ✅ |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 相关代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[粘贴相关代码]</span></span></code></pre></div><h2 id="我的分析" tabindex="-1">我的分析 <a class="header-anchor" href="#我的分析" aria-label="Permalink to &quot;我的分析&quot;">​</a></h2><p>我怀疑问题可能出在：[你的猜测]</p><h2 id="请帮我-2" tabindex="-1">请帮我 <a class="header-anchor" href="#请帮我-2" aria-label="Permalink to &quot;请帮我&quot;">​</a></h2><ol><li>找出逻辑错误所在</li><li>解释为什么当前逻辑会产生错误结果</li><li>给出修复后的代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 填写示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 问题描述</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码可以运行，但结果不符合预期。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**期望行为**：计算购物车总价时，满 100 减 20</span></span>
<span class="line"><span>**实际行为**：无论金额多少，都减了 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 测试用例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 输入（商品总价） | 期望输出 | 实际输出 | 是否正确 |</span></span>
<span class="line"><span>|---------------|---------|---------|---------|</span></span>
<span class="line"><span>| 150 | 130 | 130 | ✅ |</span></span>
<span class="line"><span>| 80 | 80 | 60 | ❌ |</span></span>
<span class="line"><span>| 100 | 80 | 80 | ✅ |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 相关代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>function calculateTotal(items) {</span></span>
<span class="line"><span>  let total = items.reduce((sum, item) =&gt; sum + item.price, 0);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 满 100 减 20</span></span>
<span class="line"><span>  if (total &gt; 100) {</span></span>
<span class="line"><span>    total = total - 20;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    total = total - 20;  // 问题可能在这里？</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return total;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="我的分析-1" tabindex="-1">我的分析 <a class="header-anchor" href="#我的分析-1" aria-label="Permalink to &quot;我的分析&quot;">​</a></h2><p>我怀疑问题可能出在：else 分支也减了 20，应该是复制粘贴时忘记删掉</p><h2 id="请帮我-3" tabindex="-1">请帮我 <a class="header-anchor" href="#请帮我-3" aria-label="Permalink to &quot;请帮我&quot;">​</a></h2><ol><li>确认我的分析是否正确</li><li>给出修复后的代码</li><li>建议如何避免这类复制粘贴错误</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板三：技术选型咨询</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：不知道选什么库、框架、工具</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 项目背景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**项目类型**：[简述项目是做什么的]</span></span>
<span class="line"><span>**技术栈**：[当前使用的技术]</span></span>
<span class="line"><span>**团队情况**：[个人项目/团队规模/技术水平]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 选型需求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我需要选择一个 [类型] 来实现 [功能]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**核心需求**：</span></span>
<span class="line"><span>- [需求1]</span></span>
<span class="line"><span>- [需求2]</span></span>
<span class="line"><span>- [需求3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**考虑因素**：</span></span>
<span class="line"><span>| 因素 | 重要程度 | 说明 |</span></span>
<span class="line"><span>|-----|---------|------|</span></span>
<span class="line"><span>| 学习成本 | 高/中/低 | [说明] |</span></span>
<span class="line"><span>| 社区活跃度 | 高/中/低 | [说明] |</span></span>
<span class="line"><span>| 性能 | 高/中/低 | [说明] |</span></span>
<span class="line"><span>| 包体积 | 高/中/低 | [说明] |</span></span>
<span class="line"><span>| 长期维护 | 高/中/低 | [说明] |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 已知候选（可选）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我目前了解到的选项有：</span></span>
<span class="line"><span>1. [选项A]：[简单印象]</span></span>
<span class="line"><span>2. [选项B]：[简单印象]</span></span>
<span class="line"><span>3. [选项C]：[简单印象]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 请帮我</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 补充我可能遗漏的候选方案</span></span>
<span class="line"><span>2. 从多个维度对比各方案的优缺点</span></span>
<span class="line"><span>3. 给出推荐方案及理由</span></span>
<span class="line"><span>4. 说明什么情况下应该选择其他方案</span></span></code></pre></div><h3 id="填写示例" tabindex="-1">填写示例 <a class="header-anchor" href="#填写示例" aria-label="Permalink to &quot;填写示例&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目背景</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**项目类型**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：个人博客网站</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**技术栈**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：Next.js + TypeScript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**团队情况**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：个人项目，前端熟练，后端初学</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 选型需求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我需要选择一个数据库方案来存储博客文章。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**核心需求**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 存储文章内容（Markdown 格式）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支持分类和标签</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 能按时间排序查询</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**考虑因素**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 因素 | 重要程度 | 说明 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-----|---------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 学习成本 | 高 | 后端不熟，希望上手简单 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 免费额度 | 高 | 个人项目，不想花钱 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 与 Next.js 集成 | 中 | 希望有现成教程 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 性能 | 低 | 博客访问量不大 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 已知候选</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我目前了解到的选项有：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Supabase：听说是 Firebase 替代品</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MongoDB Atlas：NoSQL 数据库</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PlanetScale：MySQL 云服务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 请帮我</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 补充我可能遗漏的候选方案</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 从多个维度对比各方案的优缺点</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 给出推荐方案及理由</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明什么情况下应该选择其他方案</span></span></code></pre></div><h2 id="模板四-概念解释" tabindex="-1">模板四：概念解释 <a class="header-anchor" href="#模板四-概念解释" aria-label="Permalink to &quot;模板四：概念解释&quot;">​</a></h2><p>适用于：不理解某个技术概念</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 想了解的概念</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我想理解 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">概念名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 当前困惑</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**我目前的理解**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">你现在认为它是什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**困惑的地方**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">哪里不理解</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 希望的解释方式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**技术深度**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">只要知道怎么用/想了解原理/需要深入细节</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**类比偏好**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">喜欢生活化类比/喜欢技术类比/直接解释就好</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 相关背景</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**我的技术背景**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">熟悉什么技术/语言</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**为什么要了解这个**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">应用场景</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 请帮我</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用通俗的语言解释这个概念</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 给出一个简单的代码示例</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明什么时候会用到它</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 指出常见的理解误区</span></span></code></pre></div><h3 id="填写示例-1" tabindex="-1">填写示例 <a class="header-anchor" href="#填写示例-1" aria-label="Permalink to &quot;填写示例&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 想了解的概念</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我想理解 React 中的 useEffect。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 当前困惑</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**我目前的理解**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：好像是用来处理&quot;副作用&quot;的，但不知道什么算副作用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**困惑的地方**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 什么时候需要用 useEffect？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 依赖数组是干什么的？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为什么有时候会&quot;无限循环&quot;？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 希望的解释方式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**技术深度**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：只要知道怎么用就行，原理以后再说</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**类比偏好**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：喜欢生活化类比</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 相关背景</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**我的技术背景**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：会基础 JavaScript，正在学 React</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**为什么要了解这个**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：想在组件加载时获取数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 请帮我</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用通俗的语言解释 useEffect</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 给出&quot;获取数据&quot;的代码示例</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明依赖数组的作用</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 解释为什么会&quot;无限循环&quot;以及如何避免</span></span></code></pre></div><h2 id="模板五-代码审查" tabindex="-1">模板五：代码审查 <a class="header-anchor" href="#模板五-代码审查" aria-label="Permalink to &quot;模板五：代码审查&quot;">​</a></h2><p>适用于：让 AI 检查代码质量</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 审查目标</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我审查以下代码：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`[语言]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[粘贴代码]</span></span></code></pre></div><h2 id="审查维度" tabindex="-1">审查维度 <a class="header-anchor" href="#审查维度" aria-label="Permalink to &quot;审查维度&quot;">​</a></h2><p>请从以下维度检查：</p><ul><li>[ ] <strong>功能正确性</strong>：逻辑是否正确，边界情况是否处理</li><li>[ ] <strong>安全性</strong>：是否有安全隐患（XSS、SQL注入等）</li><li>[ ] <strong>性能</strong>：是否有明显的性能问题</li><li>[ ] <strong>可读性</strong>：命名是否清晰，结构是否合理</li><li>[ ] <strong>可维护性</strong>：是否容易扩展和修改</li><li>[ ] <strong>错误处理</strong>：异常情况是否妥善处理</li></ul><h2 id="代码背景" tabindex="-1">代码背景 <a class="header-anchor" href="#代码背景" aria-label="Permalink to &quot;代码背景&quot;">​</a></h2><p><strong>这段代码的作用</strong>：[简述功能] <strong>使用场景</strong>：[在什么情况下运行]</p><h2 id="输出格式" tabindex="-1">输出格式 <a class="header-anchor" href="#输出格式" aria-label="Permalink to &quot;输出格式&quot;">​</a></h2><p>请按以下格式输出：</p><ol><li><strong>问题清单</strong>：列出发现的问题，按严重程度排序</li><li><strong>改进建议</strong>：针对每个问题给出具体建议</li><li><strong>优化后代码</strong>：给出改进后的完整代码</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 精简版：快速提问模板</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当问题比较简单时，可以用这个精简版：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>**问题**：[一句话描述问题]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**背景**：[必要的上下文]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**代码**：</span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[相关代码]</span></span></code></pre></div><p><strong>期望</strong>：[你希望得到什么帮助]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 提问技巧：如何让回答更有用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 技巧一：先说结论，再给细节</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>❌ 我有一个 React 项目，用的是 TypeScript，然后我在做一个表单验证...</span></span>
<span class="line"><span>   （AI 读了半天还不知道问题是什么）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 我的表单验证代码报错了。</span></span>
<span class="line"><span>   技术栈是 React + TypeScript，错误信息是 [xxx]。</span></span></code></pre></div><h3 id="技巧二-给出最小复现代码" tabindex="-1">技巧二：给出最小复现代码 <a class="header-anchor" href="#技巧二-给出最小复现代码" aria-label="Permalink to &quot;技巧二：给出最小复现代码&quot;">​</a></h3><p>不要贴整个文件，只贴<strong>能复现问题的最小代码</strong>。这样 AI 更容易定位问题。</p><h3 id="技巧三-说明已经尝试过什么" tabindex="-1">技巧三：说明已经尝试过什么 <a class="header-anchor" href="#技巧三-说明已经尝试过什么" aria-label="Permalink to &quot;技巧三：说明已经尝试过什么&quot;">​</a></h3><p>这能帮助 AI 避免给出你已经试过的无效方案。</p><h2 id="常见填写误区" tabindex="-1">常见填写误区 <a class="header-anchor" href="#常见填写误区" aria-label="Permalink to &quot;常见填写误区&quot;">​</a></h2><table tabindex="0"><thead><tr><th>误区</th><th>问题</th><th>正确做法</th></tr></thead><tbody><tr><td>只说&quot;不工作&quot;</td><td>AI 不知道具体症状</td><td>描述期望 vs 实际的差异</td></tr><tr><td>错误信息只截一半</td><td>丢失关键信息</td><td>完整粘贴，包括堆栈跟踪</td></tr><tr><td>不给代码</td><td>AI 只能猜测</td><td>贴出相关代码片段</td></tr><tr><td>概念问题太宽泛</td><td>&quot;解释一下 JavaScript&quot;</td><td>具体到某个点，如&quot;解释闭包&quot;</td></tr></tbody></table><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><ul><li>✅ <strong>错误排查</strong>：完整错误信息 + 触发步骤 + 相关代码 + 已尝试方法</li><li>✅ <strong>逻辑错误</strong>：用测试用例展示&quot;期望 vs 实际&quot;</li><li>✅ <strong>技术选型</strong>：明确需求优先级 + 列出考虑因素</li><li>✅ <strong>概念解释</strong>：说明当前理解和困惑点 + 期望的解释深度</li></ul>`,62)])])}const g=a(l,[["render",e]]);export{r as __pageData,g as default};
