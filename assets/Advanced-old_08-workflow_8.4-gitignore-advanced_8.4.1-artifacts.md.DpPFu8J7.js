import{_ as a,c as i,o as n,a3 as l}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"8.4.1 黑名单第一条：node_modules——依赖/构建产物：.next/、out/、日志","description":"8.4.1 黑名单第一条——依赖与构建产物 node_modules 是 .gitignore 的头号目标——它太大、能重建、每个人的都可能不同。 依赖目录 node_modules **为什么不提交**： 体积巨大（几百 MB 到几 GB） 可通过 完全恢复 不同系统可能有平台相关的二进制文件 **正确做法**： 提","frontmatter":{"title":"8.4.1 黑名单第一条：`node_modules`——依赖/构建产物：`.next/`、`out/`、日志","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/08-workflow/8.4-gitignore-advanced/8.4.1-artifacts.md","filePath":"Advanced-old/08-workflow/8.4-gitignore-advanced/8.4.1-artifacts.md","lastUpdated":1766168364000}'),e={name:"Advanced-old/08-workflow/8.4-gitignore-advanced/8.4.1-artifacts.md"};function p(t,s,h,k,d,r){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="_8-4-1-黑名单第一条——依赖与构建产物" tabindex="-1">8.4.1 黑名单第一条——依赖与构建产物 <a class="header-anchor" href="#_8-4-1-黑名单第一条——依赖与构建产物" aria-label="Permalink to &quot;8.4.1 黑名单第一条——依赖与构建产物&quot;">​</a></h1><p>node_modules 是 .gitignore 的头号目标——它太大、能重建、每个人的都可能不同。</p><h2 id="依赖目录" tabindex="-1">依赖目录 <a class="header-anchor" href="#依赖目录" aria-label="Permalink to &quot;依赖目录&quot;">​</a></h2><h3 id="node-modules" tabindex="-1">node_modules <a class="header-anchor" href="#node-modules" aria-label="Permalink to &quot;node_modules&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 任何位置的 node_modules</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">**/node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pnpm 存储（如果使用）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pnpm-store/</span></span></code></pre></div><p><strong>为什么不提交</strong>：</p><ul><li>体积巨大（几百 MB 到几 GB）</li><li>可通过 <code>pnpm install</code> 完全恢复</li><li>不同系统可能有平台相关的二进制文件</li></ul><p><strong>正确做法</strong>：</p><ul><li>提交 <code>package.json</code> 和 <code>pnpm-lock.yaml</code></li><li>通过锁文件确保依赖版本一致</li></ul><h3 id="其他依赖目录" tabindex="-1">其他依赖目录 <a class="header-anchor" href="#其他依赖目录" aria-label="Permalink to &quot;其他依赖目录&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Python</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__pycache__/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.pyc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">venv/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.venv/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Go</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vendor/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ruby</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.bundle/</span></span></code></pre></div><h2 id="构建产物" tabindex="-1">构建产物 <a class="header-anchor" href="#构建产物" aria-label="Permalink to &quot;构建产物&quot;">​</a></h2><h3 id="next-js-构建" tabindex="-1">Next.js 构建 <a class="header-anchor" href="#next-js-构建" aria-label="Permalink to &quot;Next.js 构建&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Next.js 开发和生产构建</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.next/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 静态导出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">out/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 独立部署</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.next/standalone/</span></span></code></pre></div><h3 id="通用构建目录" tabindex="-1">通用构建目录 <a class="header-anchor" href="#通用构建目录" aria-label="Permalink to &quot;通用构建目录&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 常见构建输出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dist/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">output/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># TypeScript 编译</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.tsbuildinfo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Webpack/Vite</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cache/</span></span></code></pre></div><h3 id="打包工具产物" tabindex="-1">打包工具产物 <a class="header-anchor" href="#打包工具产物" aria-label="Permalink to &quot;打包工具产物&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Turbo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.turbo/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Storybook</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">storybook-static/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Bundle 分析</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.next/analyze/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stats.html</span></span></code></pre></div><h2 id="日志文件" tabindex="-1">日志文件 <a class="header-anchor" href="#日志文件" aria-label="Permalink to &quot;日志文件&quot;">​</a></h2><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm/pnpm 日志</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm-debug.log*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm-debug.log*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn-debug.log*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn-error.log*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应用日志</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">logs/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.log.*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># PM2 日志</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pm2/logs/</span></span></code></pre></div><h2 id="测试与覆盖率" tabindex="-1">测试与覆盖率 <a class="header-anchor" href="#测试与覆盖率" aria-label="Permalink to &quot;测试与覆盖率&quot;">​</a></h2><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Jest/Vitest</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coverage/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.nyc_output/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Playwright</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test-results/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">playwright-report/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">playwright/.cache/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Cypress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cypress/screenshots/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cypress/videos/</span></span></code></pre></div><h2 id="完整示例" tabindex="-1">完整示例 <a class="header-anchor" href="#完整示例" aria-label="Permalink to &quot;完整示例&quot;">​</a></h2><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 依赖</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pnpm-store/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建产物</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.next/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">out/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dist/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.tsbuildinfo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm-debug.log*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm-debug.log*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">coverage/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test-results/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">playwright-report/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缓存</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =========================================</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cache/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.turbo/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.eslintcache</span></span></code></pre></div><h2 id="已提交的文件如何处理" tabindex="-1">已提交的文件如何处理 <a class="header-anchor" href="#已提交的文件如何处理" aria-label="Permalink to &quot;已提交的文件如何处理&quot;">​</a></h2><p>如果不小心提交了 node_modules：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 添加到 .gitignore</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;node_modules/&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .gitignore</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 从 Git 历史中移除（但保留本地文件）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cached</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 提交变更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;chore: 移除 node_modules 并添加到 gitignore&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 如果已推送，需要强制推送（谨慎使用）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force-with-lease</span></span></code></pre></div><h2 id="ai-协作指南" tabindex="-1">AI 协作指南 <a class="header-anchor" href="#ai-协作指南" aria-label="Permalink to &quot;AI 协作指南&quot;">​</a></h2><p><strong>示例 Prompt</strong>：</p><blockquote><p>&quot;我的 Next.js 项目用 pnpm 和 Prisma，请帮我生成完整的 .gitignore，包含依赖、构建产物、日志等。&quot;</p></blockquote><h2 id="验收清单" tabindex="-1">验收清单 <a class="header-anchor" href="#验收清单" aria-label="Permalink to &quot;验收清单&quot;">​</a></h2><ul><li>[ ] 理解 node_modules 不该提交的原因</li><li>[ ] 能配置构建产物的忽略规则</li><li>[ ] 知道如何处理意外提交的文件</li><li>[ ] 理解日志和测试产物的忽略</li></ul>`,32)])])}const g=a(e,[["render",p]]);export{c as __pageData,g as default};
