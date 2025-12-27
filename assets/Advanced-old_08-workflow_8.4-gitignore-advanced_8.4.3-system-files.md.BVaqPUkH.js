import{_ as i,c as a,o as n,a3 as l}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"8.4.3 电脑垃圾和编辑器配置——IDE/系统：.vscode/、.idea/、.DS_Store","description":"8.4.3 电脑垃圾和编辑器配置——系统与 IDE 文件 每个人的电脑和编辑器都不一样——这些\\"个人偏好\\"不该污染代码仓库。 操作系统文件 macOS Windows Linux IDE 配置 VS Code JetBrains (WebStorm/IntelliJ) Vim/Neovim Emacs 全局 gitig","frontmatter":{"title":"8.4.3 电脑垃圾和编辑器配置——IDE/系统：`.vscode/`、`.idea/`、`.DS_Store`","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/08-workflow/8.4-gitignore-advanced/8.4.3-system-files.md","filePath":"Advanced-old/08-workflow/8.4-gitignore-advanced/8.4.3-system-files.md","lastUpdated":1766168364000}'),e={name:"Advanced-old/08-workflow/8.4-gitignore-advanced/8.4.3-system-files.md"};function t(p,s,h,k,d,o){return n(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="_8-4-3-电脑垃圾和编辑器配置——系统与-ide-文件" tabindex="-1">8.4.3 电脑垃圾和编辑器配置——系统与 IDE 文件 <a class="header-anchor" href="#_8-4-3-电脑垃圾和编辑器配置——系统与-ide-文件" aria-label="Permalink to &quot;8.4.3 电脑垃圾和编辑器配置——系统与 IDE 文件&quot;">​</a></h1><p>每个人的电脑和编辑器都不一样——这些&quot;个人偏好&quot;不该污染代码仓库。</p><h2 id="操作系统文件" tabindex="-1">操作系统文件 <a class="header-anchor" href="#操作系统文件" aria-label="Permalink to &quot;操作系统文件&quot;">​</a></h2><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># macOS 文件夹元数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.DS_Store</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.AppleDouble</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.LSOverride</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 图标文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Icon?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 废纸篓</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Trashes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Spotlight 索引</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Spotlight-V100</span></span></code></pre></div><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缩略图缓存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Thumbs.db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ehthumbs.db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ehthumbs_vista.db</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 桌面配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Desktop.ini</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 快捷方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.lnk</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回收站</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$RECYCLE.BIN/</span></span></code></pre></div><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 备份文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 临时文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.fuse_hidden*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.nfs*</span></span></code></pre></div><h2 id="ide-配置" tabindex="-1">IDE 配置 <a class="header-anchor" href="#ide-配置" aria-label="Permalink to &quot;IDE 配置&quot;">​</a></h2><h3 id="vs-code" tabindex="-1">VS Code <a class="header-anchor" href="#vs-code" aria-label="Permalink to &quot;VS Code&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用户设置（个人偏好）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vscode/settings.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 工作区配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vscode/*.code-workspace</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 历史记录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.history/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但可能要保留这些共享配置：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !.vscode/extensions.json      # 推荐扩展</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !.vscode/launch.json          # 调试配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !.vscode/tasks.json           # 任务配置</span></span></code></pre></div><h3 id="jetbrains-webstorm-intellij" tabindex="-1">JetBrains (WebStorm/IntelliJ) <a class="header-anchor" href="#jetbrains-webstorm-intellij" aria-label="Permalink to &quot;JetBrains (WebStorm/IntelliJ)&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># IntelliJ IDEA 项目配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.idea/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但可能保留代码风格：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !.idea/codeStyles/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !.idea/inspectionProfiles/</span></span></code></pre></div><h3 id="vim-neovim" tabindex="-1">Vim/Neovim <a class="header-anchor" href="#vim-neovim" aria-label="Permalink to &quot;Vim/Neovim&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 交换文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Session 文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Session.vim</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Sessionx.vim</span></span></code></pre></div><h3 id="emacs" tabindex="-1">Emacs <a class="header-anchor" href="#emacs" aria-label="Permalink to &quot;Emacs&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 备份</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*~</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#*\\#</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自动保存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.saves-*</span></span></code></pre></div><h2 id="全局-gitignore" tabindex="-1">全局 gitignore <a class="header-anchor" href="#全局-gitignore" aria-label="Permalink to &quot;全局 gitignore&quot;">​</a></h2><p>与其在每个项目都配置系统文件，不如设置全局忽略：</p><h3 id="配置方法" tabindex="-1">配置方法 <a class="header-anchor" href="#配置方法" aria-label="Permalink to &quot;配置方法&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 创建全局 gitignore 文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 告诉 Git 使用这个文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core.excludesFile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.gitignore_global</span></span></code></pre></div><h3 id="推荐的全局配置" tabindex="-1">推荐的全局配置 <a class="header-anchor" href="#推荐的全局配置" aria-label="Permalink to &quot;推荐的全局配置&quot;">​</a></h3><div class="language-gitignore vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitignore</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.gitignore_global</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># macOS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.DS_Store</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.AppleDouble</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Windows</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Thumbs.db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Desktop.ini</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*.swo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*~</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.idea/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.vscode/settings.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 个人笔记</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TODO.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NOTES.md</span></span></code></pre></div><h2 id="项目共享配置" tabindex="-1">项目共享配置 <a class="header-anchor" href="#项目共享配置" aria-label="Permalink to &quot;项目共享配置&quot;">​</a></h2><p>有些 IDE 配置可能需要团队共享：</p><h3 id="推荐扩展-vscode-extensions-json" tabindex="-1">推荐扩展 (.vscode/extensions.json) <a class="header-anchor" href="#推荐扩展-vscode-extensions-json" aria-label="Permalink to &quot;推荐扩展 (.vscode/extensions.json)&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;recommendations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;dbaeumer.vscode-eslint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;esbenp.prettier-vscode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;prisma.prisma&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="调试配置-vscode-launch-json" tabindex="-1">调试配置 (.vscode/launch.json) <a class="header-anchor" href="#调试配置-vscode-launch-json" aria-label="Permalink to &quot;调试配置 (.vscode/launch.json)&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;configurations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;launch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Next.js: debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;runtimeExecutable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;runtimeArgs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9229</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="配置策略" tabindex="-1">配置策略 <a class="header-anchor" href="#配置策略" aria-label="Permalink to &quot;配置策略&quot;">​</a></h2><table tabindex="0"><thead><tr><th>文件</th><th>建议</th><th>原因</th></tr></thead><tbody><tr><td>.vscode/settings.json</td><td>忽略</td><td>个人偏好</td></tr><tr><td>.vscode/extensions.json</td><td>提交</td><td>统一开发环境</td></tr><tr><td>.vscode/launch.json</td><td>提交</td><td>共享调试配置</td></tr><tr><td>.idea/</td><td>忽略</td><td>IDE 特定</td></tr><tr><td>.editorconfig</td><td>提交</td><td>跨 IDE 格式化</td></tr></tbody></table><h2 id="editorconfig-替代方案" tabindex="-1">EditorConfig 替代方案 <a class="header-anchor" href="#editorconfig-替代方案" aria-label="Permalink to &quot;EditorConfig 替代方案&quot;">​</a></h2><p>使用 <code>.editorconfig</code> 可以跨 IDE 统一基本格式：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .editorconfig</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[*]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = utf-8</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end_of_line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = lf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">indent_style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = space</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">indent_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">insert_final_newline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">trim_trailing_whitespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[*.md]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">trim_trailing_whitespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false</span></span></code></pre></div><h2 id="验收清单" tabindex="-1">验收清单 <a class="header-anchor" href="#验收清单" aria-label="Permalink to &quot;验收清单&quot;">​</a></h2><ul><li>[ ] 配置了操作系统文件的忽略规则</li><li>[ ] 设置了全局 gitignore</li><li>[ ] 理解哪些 IDE 配置应该共享</li><li>[ ] 可选：配置了 EditorConfig</li></ul>`,37)])])}const E=i(e,[["render",t]]);export{c as __pageData,E as default};
