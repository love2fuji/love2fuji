import{_ as a,c as n,o as i,a3 as t}from"./chunks/framework.CUcrqFol.js";const k=JSON.parse('{"title":"8.4 哪些文件不该进仓库——.gitignore 管理：依赖/构建/敏感/IDE/系统/日志","description":"8.4 哪些文件不该进仓库——Gitignore 进阶 是代码仓库的\\"门卫\\"——它决定哪些文件能进，哪些文件留在门外。 为什么需要 .gitignore **不该进仓库的文件**： | 类型 | 示例 | 原因 | |------|------|------| | 依赖目录 | node_modules | 太大，可通","frontmatter":{"title":"8.4 哪些文件不该进仓库——`.gitignore` 管理：依赖/构建/敏感/IDE/系统/日志","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/08-workflow/8.4-gitignore-advanced/index.md","filePath":"Advanced-old/08-workflow/8.4-gitignore-advanced/index.md","lastUpdated":1766168364000}'),e={name:"Advanced-old/08-workflow/8.4-gitignore-advanced/index.md"};function l(d,s,p,o,r,h){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="_8-4-哪些文件不该进仓库——gitignore-进阶" tabindex="-1">8.4 哪些文件不该进仓库——Gitignore 进阶 <a class="header-anchor" href="#_8-4-哪些文件不该进仓库——gitignore-进阶" aria-label="Permalink to &quot;8.4 哪些文件不该进仓库——Gitignore 进阶&quot;">​</a></h1><p><code>.gitignore</code> 是代码仓库的&quot;门卫&quot;——它决定哪些文件能进，哪些文件留在门外。</p><h2 id="为什么需要-gitignore" tabindex="-1">为什么需要 .gitignore <a class="header-anchor" href="#为什么需要-gitignore" aria-label="Permalink to &quot;为什么需要 .gitignore&quot;">​</a></h2><p><strong>不该进仓库的文件</strong>：</p><table tabindex="0"><thead><tr><th>类型</th><th>示例</th><th>原因</th></tr></thead><tbody><tr><td>依赖目录</td><td>node_modules</td><td>太大，可通过 package.json 恢复</td></tr><tr><td>构建产物</td><td>.next, out, dist</td><td>可重新构建</td></tr><tr><td>敏感信息</td><td>.env, *.pem</td><td>安全风险</td></tr><tr><td>系统文件</td><td>.DS_Store</td><td>与代码无关</td></tr><tr><td>IDE 配置</td><td>.idea, .vscode</td><td>个人偏好</td></tr><tr><td>日志文件</td><td>*.log</td><td>临时数据</td></tr></tbody></table><h2 id="next-js-项目的-gitignore" tabindex="-1">Next.js 项目的 .gitignore <a class="header-anchor" href="#next-js-项目的-gitignore" aria-label="Permalink to &quot;Next.js 项目的 .gitignore&quot;">​</a></h2><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 依赖目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pnpm-store/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建产物</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.next/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">out/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dist/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.local</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.*.local</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm-debug.log*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm-debug.log*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 系统文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.DS_Store</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Thumbs.db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># IDE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.idea/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vscode/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试覆盖率</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coverage/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TypeScript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.tsbuildinfo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vercel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vercel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 本地数据库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.sqlite</span></span></code></pre></div><h2 id="本节结构" tabindex="-1">本节结构 <a class="header-anchor" href="#本节结构" aria-label="Permalink to &quot;本节结构&quot;">​</a></h2><ol><li><strong>依赖与构建产物</strong>：node_modules、.next、out 等</li><li><strong>敏感文件</strong>：.env 管理与 .env.example 模板</li><li><strong>系统与 IDE 文件</strong>：跨平台忽略配置</li><li><strong>防误提交</strong>：pre-commit 钩子检查</li></ol><h2 id="gitignore-语法速查" tabindex="-1">.gitignore 语法速查 <a class="header-anchor" href="#gitignore-语法速查" aria-label="Permalink to &quot;.gitignore 语法速查&quot;">​</a></h2><table tabindex="0"><thead><tr><th>语法</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td><code>*</code></td><td>匹配任意字符</td><td><code>*.log</code></td></tr><tr><td><code>**</code></td><td>匹配任意目录</td><td><code>**/node_modules</code></td></tr><tr><td><code>!</code></td><td>取反（不忽略）</td><td><code>!.env.example</code></td></tr><tr><td><code>/</code> 开头</td><td>只匹配根目录</td><td><code>/dist</code></td></tr><tr><td><code>/</code> 结尾</td><td>只匹配目录</td><td><code>logs/</code></td></tr><tr><td><code>#</code></td><td>注释</td><td><code># 忽略日志</code></td></tr></tbody></table><h2 id="验收清单" tabindex="-1">验收清单 <a class="header-anchor" href="#验收清单" aria-label="Permalink to &quot;验收清单&quot;">​</a></h2><ul><li>[ ] 了解哪些文件应该被忽略</li><li>[ ] 能编写基本的 .gitignore 规则</li><li>[ ] 理解敏感文件的处理方式</li><li>[ ] 知道如何配置全局 gitignore</li></ul>`,13)])])}const g=a(e,[["render",l]]);export{k as __pageData,g as default};
