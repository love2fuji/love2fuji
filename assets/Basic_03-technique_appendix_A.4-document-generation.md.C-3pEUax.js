import{_ as n,c as a,o as p,a3 as i}from"./chunks/framework.CUcrqFol.js";const r=JSON.parse('{"title":"A.4 文档生成类模板","description":"A.4 文档生成类模板 本节提供生成各类文档的 Prompt 模板，包括代码注释、README、API 文档和使用说明。 模板一：代码注释生成 适用于：为现有代码添加注释 [语言] [粘贴代码] 填写示例 typescript interface Task { id: string; title: string; co","frontmatter":{"title":"A.4 文档生成类模板"},"headers":[],"relativePath":"Basic/03-technique/appendix/A.4-document-generation.md","filePath":"Basic/03-technique/appendix/A.4-document-generation.md","lastUpdated":1765094268000}'),l={name:"Basic/03-technique/appendix/A.4-document-generation.md"};function e(t,s,c,h,o,d){return p(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="a-4-文档生成类模板" tabindex="-1">A.4 文档生成类模板 <a class="header-anchor" href="#a-4-文档生成类模板" aria-label="Permalink to &quot;A.4 文档生成类模板&quot;">​</a></h1><p>本节提供生成各类文档的 Prompt 模板，包括代码注释、README、API 文档和使用说明。</p><h2 id="模板一-代码注释生成" tabindex="-1">模板一：代码注释生成 <a class="header-anchor" href="#模板一-代码注释生成" aria-label="Permalink to &quot;模板一：代码注释生成&quot;">​</a></h2><p>适用于：为现有代码添加注释</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 注释需求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请为以下代码添加中文注释：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`[语言]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[粘贴代码]</span></span></code></pre></div><h2 id="注释要求" tabindex="-1">注释要求 <a class="header-anchor" href="#注释要求" aria-label="Permalink to &quot;注释要求&quot;">​</a></h2><p><strong>注释类型</strong>：</p><ul><li>[ ] 文件头注释（说明文件用途）</li><li>[ ] 函数注释（说明参数、返回值、功能）</li><li>[ ] 关键逻辑注释（解释复杂逻辑）</li><li>[ ] TODO 注释（标记待完善的地方）</li></ul><p><strong>注释风格</strong>：</p><ul><li>语言：中文</li><li>格式：[JSDoc 风格 / 普通注释 / 你的规范]</li><li>详细程度：[简洁/适中/详尽]</li></ul><p><strong>特别说明</strong>：</p><ul><li>[其他要求，如&quot;不需要给简单的变量加注释&quot;]</li></ul><h2 id="输出要求" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请输出添加注释后的完整代码，保持原有代码逻辑不变。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 填写示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 注释需求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请为以下代码添加中文注释：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>interface Task {</span></span>
<span class="line"><span>  id: string;</span></span>
<span class="line"><span>  title: string;</span></span>
<span class="line"><span>  completed: boolean;</span></span>
<span class="line"><span>  createdAt: Date;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function useTasks() {</span></span>
<span class="line"><span>  const [tasks, setTasks] = useState&lt;Task[]&gt;([]);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const addTask = useCallback((title: string) =&gt; {</span></span>
<span class="line"><span>    const newTask: Task = {</span></span>
<span class="line"><span>      id: crypto.randomUUID(),</span></span>
<span class="line"><span>      title,</span></span>
<span class="line"><span>      completed: false,</span></span>
<span class="line"><span>      createdAt: new Date(),</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    setTasks(prev =&gt; [...prev, newTask]);</span></span>
<span class="line"><span>  }, []);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const toggleTask = useCallback((id: string) =&gt; {</span></span>
<span class="line"><span>    setTasks(prev =&gt; </span></span>
<span class="line"><span>      prev.map(task =&gt; </span></span>
<span class="line"><span>        task.id === id ? { ...task, completed: !task.completed } : task</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }, []);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return { tasks, addTask, toggleTask };</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="注释要求-1" tabindex="-1">注释要求 <a class="header-anchor" href="#注释要求-1" aria-label="Permalink to &quot;注释要求&quot;">​</a></h2><p><strong>注释类型</strong>：</p><ul><li>[x] 文件头注释</li><li>[x] 函数注释（JSDoc 格式）</li><li>[x] 关键逻辑注释</li></ul><p><strong>注释风格</strong>：</p><ul><li>语言：中文</li><li>格式：JSDoc 风格</li><li>详细程度：适中</li></ul><p><strong>特别说明</strong>：</p><ul><li>interface 的每个字段需要注释</li><li>useCallback 需要解释为什么用它</li></ul><h2 id="输出要求-1" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-1" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请输出添加注释后的完整代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板二：README 生成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：为项目生成说明文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 项目信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**项目名称**：[名称]</span></span>
<span class="line"><span>**一句话描述**：[简述项目做什么]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**技术栈**：</span></span>
<span class="line"><span>- 前端：[技术]</span></span>
<span class="line"><span>- 后端：[技术，如无则写&quot;无&quot;]</span></span>
<span class="line"><span>- 数据库：[技术，如无则写&quot;无&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**目标用户**：[谁会用这个项目]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 项目功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**核心功能**：</span></span>
<span class="line"><span>1. [功能1]</span></span>
<span class="line"><span>2. [功能2]</span></span>
<span class="line"><span>3. [功能3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**功能截图**（可选）：</span></span>
<span class="line"><span>[如果有截图，描述截图内容]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技术细节</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**项目结构**：</span></span></code></pre></div><p>[粘贴项目目录结构]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**环境要求**：</span></span>
<span class="line"><span>- Node.js 版本：[版本]</span></span>
<span class="line"><span>- 其他依赖：[列出]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**安装步骤**：</span></span>
<span class="line"><span>[如果你知道安装步骤，可以先写出来]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## README 要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**包含内容**：</span></span>
<span class="line"><span>- [ ] 项目简介</span></span>
<span class="line"><span>- [ ] 功能特性</span></span>
<span class="line"><span>- [ ] 快速开始（安装和运行）</span></span>
<span class="line"><span>- [ ] 项目结构说明</span></span>
<span class="line"><span>- [ ] 技术栈说明</span></span>
<span class="line"><span>- [ ] 贡献指南</span></span>
<span class="line"><span>- [ ] License</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**风格要求**：</span></span>
<span class="line"><span>- 语言：中文</span></span>
<span class="line"><span>- 风格：[简洁专业/友好亲切/技术范]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 输出要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请生成完整的 README.md 文件内容。</span></span></code></pre></div><h3 id="填写示例" tabindex="-1">填写示例 <a class="header-anchor" href="#填写示例" aria-label="Permalink to &quot;填写示例&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**项目名称**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：极简待办</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**一句话描述**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：一个打开浏览器就能用的极简待办清单</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**技术栈**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端：React + TypeScript + Tailwind CSS</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 后端：无</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据库：浏览器 localStorage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**目标用户**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：想要简单记录每日待办的个人用户</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**核心功能**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加待办任务</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标记任务完成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 删除任务</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据本地持久化</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 技术细节</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**项目结构**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span></span></code></pre></div><p>src/ ├── components/ │ ├── AddTask.tsx │ ├── TaskList.tsx │ └── TaskItem.tsx ├── hooks/ │ └── useTasks.ts ├── types/ │ └── index.ts ├── App.tsx └── main.tsx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**环境要求**：</span></span>
<span class="line"><span>- Node.js 版本：18+</span></span>
<span class="line"><span>- 包管理器：npm 或 pnpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## README 要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**包含内容**：</span></span>
<span class="line"><span>- [x] 项目简介</span></span>
<span class="line"><span>- [x] 功能特性</span></span>
<span class="line"><span>- [x] 快速开始</span></span>
<span class="line"><span>- [x] 项目结构说明</span></span>
<span class="line"><span>- [ ] 贡献指南（不需要）</span></span>
<span class="line"><span>- [ ] License（不需要）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**风格要求**：</span></span>
<span class="line"><span>- 语言：中文</span></span>
<span class="line"><span>- 风格：简洁专业</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 输出要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请生成完整的 README.md 文件内容。</span></span></code></pre></div><h2 id="模板三-api-文档生成" tabindex="-1">模板三：API 文档生成 <a class="header-anchor" href="#模板三-api-文档生成" aria-label="Permalink to &quot;模板三：API 文档生成&quot;">​</a></h2><p>适用于：为后端接口生成文档</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## API 基本信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**API 名称**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">接口名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**请求路径**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[如 /api/users]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**请求方法**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">GET/POST/PUT/DELETE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**功能描述**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">这个接口做什么</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 接口代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`[语言]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[粘贴接口实现代码]</span></span></code></pre></div><h2 id="文档要求" tabindex="-1">文档要求 <a class="header-anchor" href="#文档要求" aria-label="Permalink to &quot;文档要求&quot;">​</a></h2><p><strong>文档格式</strong>：[Markdown / OpenAPI YAML / 其他]</p><p><strong>包含内容</strong>：</p><ul><li>[ ] 接口描述</li><li>[ ] 请求参数说明</li><li>[ ] 请求体示例</li><li>[ ] 响应格式说明</li><li>[ ] 响应示例</li><li>[ ] 错误码说明</li><li>[ ] 调用示例（curl/JavaScript）</li></ul><h2 id="输出要求-2" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-2" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请生成完整的 API 文档。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 填写示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## API 基本信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**API 名称**：创建任务</span></span>
<span class="line"><span>**请求路径**：/api/tasks</span></span>
<span class="line"><span>**请求方法**：POST</span></span>
<span class="line"><span>**功能描述**：创建一个新的待办任务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 接口代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>// POST /api/tasks</span></span>
<span class="line"><span>export async function POST(request: Request) {</span></span>
<span class="line"><span>  const body = await request.json();</span></span>
<span class="line"><span>  const { title, priority } = body;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  if (!title || title.trim() === &#39;&#39;) {</span></span>
<span class="line"><span>    return Response.json(</span></span>
<span class="line"><span>      { error: &#39;Title is required&#39; },</span></span>
<span class="line"><span>      { status: 400 }</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const task = {</span></span>
<span class="line"><span>    id: crypto.randomUUID(),</span></span>
<span class="line"><span>    title: title.trim(),</span></span>
<span class="line"><span>    priority: priority || &#39;medium&#39;,</span></span>
<span class="line"><span>    completed: false,</span></span>
<span class="line"><span>    createdAt: new Date().toISOString(),</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 保存到数据库...</span></span>
<span class="line"><span>  await db.tasks.create(task);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return Response.json(task, { status: 201 });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="文档要求-1" tabindex="-1">文档要求 <a class="header-anchor" href="#文档要求-1" aria-label="Permalink to &quot;文档要求&quot;">​</a></h2><p><strong>文档格式</strong>：Markdown</p><p><strong>包含内容</strong>：</p><ul><li>[x] 接口描述</li><li>[x] 请求参数说明</li><li>[x] 请求体示例</li><li>[x] 响应格式说明</li><li>[x] 响应示例</li><li>[x] 错误码说明</li><li>[x] 调用示例（curl）</li></ul><h2 id="输出要求-3" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-3" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请生成完整的 API 文档。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板四：使用说明生成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：为非技术用户编写使用指南</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 产品信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**产品名称**：[名称]</span></span>
<span class="line"><span>**产品类型**：[网页/App/桌面软件/脚本]</span></span>
<span class="line"><span>**目标用户**：[谁会用，技术水平如何]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 核心功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请为以下功能编写使用说明：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **[功能1]**</span></span>
<span class="line"><span>   - 功能描述：[做什么]</span></span>
<span class="line"><span>   - 入口位置：[在哪里找到这个功能]</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>2. **[功能2]**</span></span>
<span class="line"><span>   - 功能描述：[做什么]</span></span>
<span class="line"><span>   - 入口位置：[在哪里找到这个功能]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 说明要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**语言风格**：</span></span>
<span class="line"><span>- 语气：[正式/亲切/简洁]</span></span>
<span class="line"><span>- 技术术语：[避免使用/简单解释后使用]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**内容结构**：</span></span>
<span class="line"><span>- [ ] 功能介绍</span></span>
<span class="line"><span>- [ ] 操作步骤（分步骤说明）</span></span>
<span class="line"><span>- [ ] 注意事项</span></span>
<span class="line"><span>- [ ] 常见问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**配图说明**（可选）：</span></span>
<span class="line"><span>[描述需要配什么图，或标注&quot;无需配图&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 输出要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请生成用户友好的使用说明文档。</span></span></code></pre></div><h2 id="模板五-学习笔记整理" tabindex="-1">模板五：学习笔记整理 <a class="header-anchor" href="#模板五-学习笔记整理" aria-label="Permalink to &quot;模板五：学习笔记整理&quot;">​</a></h2><p>适用于：整理技术学习内容</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 学习主题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我学习了 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">主题</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，请帮我整理笔记。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 学习内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以下是我学习过程中记录的零散笔记：</span></span></code></pre></div><p>[粘贴你的学习笔记、代码片段、关键词等]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 整理要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**笔记结构**：</span></span>
<span class="line"><span>- [ ] 概念定义</span></span>
<span class="line"><span>- [ ] 核心要点（3-5 条）</span></span>
<span class="line"><span>- [ ] 代码示例</span></span>
<span class="line"><span>- [ ] 使用场景</span></span>
<span class="line"><span>- [ ] 常见误区</span></span>
<span class="line"><span>- [ ] 相关概念链接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**格式偏好**：</span></span>
<span class="line"><span>- 使用 Markdown</span></span>
<span class="line"><span>- 代码块带语法高亮</span></span>
<span class="line"><span>- 重点用加粗标注</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 输出要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请输出结构化的学习笔记，方便日后复习。</span></span></code></pre></div><h3 id="填写示例-1" tabindex="-1">填写示例 <a class="header-anchor" href="#填写示例-1" aria-label="Permalink to &quot;填写示例&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 学习主题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我学习了 React Hooks 中的 useEffect，请帮我整理笔记。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 学习内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">以下是我学习过程中记录的零散笔记：</span></span></code></pre></div><p>useEffect 副作用</p><ul><li>获取数据</li><li>订阅事件</li><li>修改 DOM</li></ul><p>依赖数组 [] 空数组 - 只在挂载时执行一次 不写 - 每次渲染都执行 [dep1, dep2] - 依赖变化时执行</p><p>清理函数 return () =&gt; {} 组件卸载时调用 避免内存泄漏</p><p>常见错误： 无限循环 - 依赖数组没写对 内存泄漏 - 忘记清理订阅</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 整理要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**笔记结构**：</span></span>
<span class="line"><span>- [x] 概念定义</span></span>
<span class="line"><span>- [x] 核心要点</span></span>
<span class="line"><span>- [x] 代码示例</span></span>
<span class="line"><span>- [x] 使用场景</span></span>
<span class="line"><span>- [x] 常见误区</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**格式偏好**：</span></span>
<span class="line"><span>- 使用 Markdown</span></span>
<span class="line"><span>- 代码块带语法高亮</span></span>
<span class="line"><span>- 重点用加粗标注</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 输出要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请输出结构化的学习笔记。</span></span></code></pre></div><h2 id="精简版-快速生成文档" tabindex="-1">精简版：快速生成文档 <a class="header-anchor" href="#精简版-快速生成文档" aria-label="Permalink to &quot;精简版：快速生成文档&quot;">​</a></h2><p>当需求简单时，可以用这个精简版：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请为以下代码生成 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">注释/文档/说明</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`[语言]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[代码]</span></span></code></pre></div><p>要求：</p><ul><li>语言：中文</li><li>格式：[Markdown/JSDoc/其他]</li><li>[其他要求]</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 文档生成技巧</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 技巧一：提供足够的上下文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI 需要理解代码的用途才能写出好的文档。简单说明这段代码&quot;是做什么的&quot;，能让文档更准确。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 技巧二：指定目标读者</span></span>
<span class="line"><span></span></span>
<span class="line"><span>给开发者看的文档和给普通用户看的说明，写法完全不同。明确读者是谁。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 技巧三：给出格式示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你有特定的文档格式要求，给一个示例比文字描述更有效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常见填写误区</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 误区 | 问题 | 正确做法 |</span></span>
<span class="line"><span>|-----|------|---------|</span></span>
<span class="line"><span>| 不说明用途 | AI 不理解代码做什么 | 简要说明功能和场景 |</span></span>
<span class="line"><span>| 不指定格式 | 输出格式随机 | 明确要 Markdown/JSDoc 等 |</span></span>
<span class="line"><span>| 不指定语言 | 可能输出英文 | 明确要求中文 |</span></span>
<span class="line"><span>| 要求过于笼统 | &quot;写个文档&quot; | 具体说明包含哪些内容 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 本节要点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- ✅ **代码注释**：指定注释类型 + 风格 + 详细程度</span></span>
<span class="line"><span>- ✅ **README**：提供项目信息 + 功能列表 + 技术细节</span></span>
<span class="line"><span>- ✅ **API 文档**：提供接口代码 + 指定文档格式</span></span>
<span class="line"><span>- ✅ **使用说明**：明确目标用户 + 指定语言风格</span></span>
<span class="line"><span>- ✅ **关键技巧**：提供上下文 + 指定目标读者 + 给出格式示例</span></span></code></pre></div>`,67)])])}const g=n(l,[["render",e]]);export{r as __pageData,g as default};
