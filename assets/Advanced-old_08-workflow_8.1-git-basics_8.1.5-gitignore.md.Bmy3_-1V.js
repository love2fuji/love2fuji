import{_ as i,c as a,o as n,a3 as t}from"./chunks/framework.CUcrqFol.js";const g=JSON.parse('{"title":"8.1.5 哪些文件不该被穿越——.gitignore 作用：版本控制的边界管理","description":"8.1.5 哪些文件不该被穿越——.gitignore 的作用 不是所有文件都应该被 Git 追踪——密钥、依赖包、构建产物都应该被排除在版本控制之外。 为什么需要 .gitignore 将不该提交的文件纳入版本控制会带来严重问题： | 问题类型 | 后果 | |----------|------| | 提交敏感信息","frontmatter":{"title":"8.1.5 哪些文件不该被穿越——.gitignore 作用：版本控制的边界管理","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/08-workflow/8.1-git-basics/8.1.5-gitignore.md","filePath":"Advanced-old/08-workflow/8.1-git-basics/8.1.5-gitignore.md","lastUpdated":1766168364000}'),l={name:"Advanced-old/08-workflow/8.1-git-basics/8.1.5-gitignore.md"};function e(p,s,h,d,k,r){return n(),a("div",null,[...s[0]||(s[0]=[t(`<h1 id="_8-1-5-哪些文件不该被穿越——-gitignore-的作用" tabindex="-1">8.1.5 哪些文件不该被穿越——.gitignore 的作用 <a class="header-anchor" href="#_8-1-5-哪些文件不该被穿越——-gitignore-的作用" aria-label="Permalink to &quot;8.1.5 哪些文件不该被穿越——.gitignore 的作用&quot;">​</a></h1><p>不是所有文件都应该被 Git 追踪——密钥、依赖包、构建产物都应该被排除在版本控制之外。</p><h2 id="为什么需要-gitignore" tabindex="-1">为什么需要 .gitignore <a class="header-anchor" href="#为什么需要-gitignore" aria-label="Permalink to &quot;为什么需要 .gitignore&quot;">​</a></h2><p>将不该提交的文件纳入版本控制会带来严重问题：</p><table tabindex="0"><thead><tr><th>问题类型</th><th>后果</th></tr></thead><tbody><tr><td>提交敏感信息</td><td>API 密钥、密码泄露，可能导致安全事故</td></tr><tr><td>提交依赖包</td><td>仓库体积暴增，clone 速度极慢</td></tr><tr><td>提交构建产物</td><td>每次构建都产生大量无意义变更</td></tr><tr><td>提交系统文件</td><td><code>.DS_Store</code>、<code>Thumbs.db</code> 污染仓库</td></tr></tbody></table><h2 id="gitignore-基础语法" tabindex="-1">.gitignore 基础语法 <a class="header-anchor" href="#gitignore-基础语法" aria-label="Permalink to &quot;.gitignore 基础语法&quot;">​</a></h2><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这是注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略单个文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略特定目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.next/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略所有 .log 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略所有目录下的 .DS_Store</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">**/.DS_Store</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但不忽略 important.log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">!important.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略根目录下的 build，但不忽略子目录的 build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略 doc 目录下所有 .txt 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc/**/*.txt</span></span></code></pre></div><h3 id="语法规则速查" tabindex="-1">语法规则速查 <a class="header-anchor" href="#语法规则速查" aria-label="Permalink to &quot;语法规则速查&quot;">​</a></h3><table tabindex="0"><thead><tr><th>模式</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>*</code></td><td>匹配任意字符（不含 /）</td><td><code>*.log</code></td></tr><tr><td><code>**</code></td><td>匹配任意目录层级</td><td><code>**/node_modules</code></td></tr><tr><td><code>?</code></td><td>匹配单个字符</td><td><code>?.txt</code></td></tr><tr><td><code>[]</code></td><td>匹配字符集</td><td><code>[abc].txt</code></td></tr><tr><td><code>/</code> 开头</td><td>只匹配根目录</td><td><code>/build</code></td></tr><tr><td><code>/</code> 结尾</td><td>只匹配目录</td><td><code>logs/</code></td></tr><tr><td><code>!</code></td><td>取反（不忽略）</td><td><code>!important.log</code></td></tr></tbody></table><h2 id="next-js-项目推荐配置" tabindex="-1">Next.js 项目推荐配置 <a class="header-anchor" href="#next-js-项目推荐配置" aria-label="Permalink to &quot;Next.js 项目推荐配置&quot;">​</a></h2><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pnpm-store/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Next.js 构建产物</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.next/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">out/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 环境变量（敏感信息）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.local</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.*.local</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm-debug.log*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn-debug.log*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn-error.log*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># IDE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vscode/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.idea/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 系统文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.DS_Store</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Thumbs.db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TypeScript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.tsbuildinfo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试覆盖率</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coverage/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Vercel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vercel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Prisma</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prisma/*.db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prisma/*.db-journal</span></span></code></pre></div><h2 id="常见问题处理" tabindex="-1">常见问题处理 <a class="header-anchor" href="#常见问题处理" aria-label="Permalink to &quot;常见问题处理&quot;">​</a></h2><h3 id="已提交的文件如何从-git-中移除" tabindex="-1">已提交的文件如何从 Git 中移除 <a class="header-anchor" href="#已提交的文件如何从-git-中移除" aria-label="Permalink to &quot;已提交的文件如何从 Git 中移除&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从 Git 追踪中移除，但保留本地文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cached</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从 Git 追踪中移除整个目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cached</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加到 .gitignore</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.env&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .gitignore</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交变更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;chore: 移除敏感文件并更新 gitignore&quot;</span></span></code></pre></div><h3 id="检查文件为什么被忽略" tabindex="-1">检查文件为什么被忽略 <a class="header-anchor" href="#检查文件为什么被忽略" aria-label="Permalink to &quot;检查文件为什么被忽略&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查某个文件是否被忽略</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check-ignore</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path/to/file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查哪些文件被追踪</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-files</span></span></code></pre></div><h3 id="全局-gitignore" tabindex="-1">全局 .gitignore <a class="header-anchor" href="#全局-gitignore" aria-label="Permalink to &quot;全局 .gitignore&quot;">​</a></h3><p>对于所有项目都需要忽略的文件（如 IDE 配置），可以设置全局配置：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建全局 gitignore 文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置 Git 使用它</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.excludesfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span></code></pre></div><p>常见全局忽略内容：</p><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># macOS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.DS_Store</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.AppleDouble</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.LSOverride</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Windows</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Thumbs.db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ehthumbs.db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Desktop.ini</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># IDE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.idea/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vscode/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.sublime-project</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.sublime-workspace</span></span></code></pre></div><h2 id="gitignore-模板资源" tabindex="-1">.gitignore 模板资源 <a class="header-anchor" href="#gitignore-模板资源" aria-label="Permalink to &quot;.gitignore 模板资源&quot;">​</a></h2><ul><li><strong>gitignore.io</strong>：根据项目类型生成 .gitignore</li><li><strong>GitHub gitignore 仓库</strong>：官方维护的各语言/框架模板</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 gitignore.io 生成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://www.toptal.com/developers/gitignore/api/node,nextjs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .gitignore</span></span></code></pre></div><h2 id="ai-协作指南" tabindex="-1">AI 协作指南 <a class="header-anchor" href="#ai-协作指南" aria-label="Permalink to &quot;AI 协作指南&quot;">​</a></h2><p><strong>示例 Prompt</strong>：</p><blockquote><p>&quot;请帮我生成一个 Next.js + Prisma + TypeScript 项目的 .gitignore 文件，包含 macOS 和 Windows 系统文件、VS Code 配置、环境变量、依赖和构建产物。&quot;</p></blockquote><h2 id="验收清单" tabindex="-1">验收清单 <a class="header-anchor" href="#验收清单" aria-label="Permalink to &quot;验收清单&quot;">​</a></h2><ul><li>[ ] 理解 .gitignore 的作用和重要性</li><li>[ ] 能编写基本的忽略规则</li><li>[ ] 知道如何移除已追踪的文件</li><li>[ ] 了解全局 .gitignore 的配置方法</li></ul>`,29)])])}const c=i(l,[["render",e]]);export{g as __pageData,c as default};
