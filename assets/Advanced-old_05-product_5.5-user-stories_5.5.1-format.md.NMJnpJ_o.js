import{_ as a,c as n,o as i,a3 as t}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"5.5.1 像用户一样描述需求——用户故事格式：作为...我希望...以便...","description":"5.5.1 像用户一样描述需求——用户故事格式 一句话破题 用户故事的标准格式：**作为 [角色]，我希望 [做什么]，以便 [获得什么价值]**。 用户故事的三要素 好的用户故事 vs 差的用户故事 | 差的描述 | 好的用户故事 | |----------|--------------| | \\"做登录功能\\" | 作","frontmatter":{"title":"5.5.1 像用户一样描述需求——用户故事格式：作为...我希望...以便...","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.5-user-stories/5.5.1-format.md","filePath":"Advanced-old/05-product/5.5-user-stories/5.5.1-format.md","lastUpdated":1766168364000}'),l={name:"Advanced-old/05-product/5.5-user-stories/5.5.1-format.md"};function p(e,s,h,d,o,r){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="_5-5-1-像用户一样描述需求——用户故事格式" tabindex="-1">5.5.1 像用户一样描述需求——用户故事格式 <a class="header-anchor" href="#_5-5-1-像用户一样描述需求——用户故事格式" aria-label="Permalink to &quot;5.5.1 像用户一样描述需求——用户故事格式&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>用户故事的标准格式：<strong>作为 [角色]，我希望 [做什么]，以便 [获得什么价值]</strong>。</p><h3 id="用户故事的三要素" tabindex="-1">用户故事的三要素 <a class="header-anchor" href="#用户故事的三要素" aria-label="Permalink to &quot;用户故事的三要素&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>作为 [Who] - 谁会使用这个功能</span></span>
<span class="line"><span>我希望 [What] - 想要做什么</span></span>
<span class="line"><span>以便 [Why] - 为什么想要这样做</span></span></code></pre></div><h3 id="好的用户故事-vs-差的用户故事" tabindex="-1">好的用户故事 vs 差的用户故事 <a class="header-anchor" href="#好的用户故事-vs-差的用户故事" aria-label="Permalink to &quot;好的用户故事 vs 差的用户故事&quot;">​</a></h3><table tabindex="0"><thead><tr><th>差的描述</th><th>好的用户故事</th></tr></thead><tbody><tr><td>&quot;做登录功能&quot;</td><td>作为用户，我希望用邮箱密码登录，以便访问我的个人数据</td></tr><tr><td>&quot;文章列表&quot;</td><td>作为读者，我希望浏览文章列表，以便发现感兴趣的内容</td></tr><tr><td>&quot;添加搜索&quot;</td><td>作为读者，我希望搜索文章，以便快速找到特定主题</td></tr></tbody></table><h3 id="为什么要写-以便" tabindex="-1">为什么要写&quot;以便&quot; <a class="header-anchor" href="#为什么要写-以便" aria-label="Permalink to &quot;为什么要写&quot;以便&quot;&quot;">​</a></h3><p>&quot;以便&quot;部分是最容易被忽略，却最重要的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 作为用户，我希望能登录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 作为用户，我希望能登录，以便：</span></span>
<span class="line"><span>   - 保存我的阅读记录</span></span>
<span class="line"><span>   - 发表评论</span></span>
<span class="line"><span>   - 收藏文章</span></span></code></pre></div><p>知道了&quot;为什么&quot;，才能更好地设计&quot;怎么做&quot;。</p><h3 id="不同角色的用户故事" tabindex="-1">不同角色的用户故事 <a class="header-anchor" href="#不同角色的用户故事" aria-label="Permalink to &quot;不同角色的用户故事&quot;">​</a></h3><p>一个产品可能有多种用户角色：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 博客系统用户故事</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 作为访客</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望浏览文章列表，以便发现感兴趣的内容</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望阅读文章详情，以便学习新知识</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望搜索文章，以便快速定位内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 作为注册用户</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望登录账号，以便使用个人功能</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望评论文章，以便与作者互动</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望收藏文章，以便日后重读</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 作为博主</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望撰写文章，以便分享我的知识</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望管理文章，以便维护内容质量</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我希望查看统计，以便了解读者偏好</span></span></code></pre></div><h3 id="用户故事的验收标准" tabindex="-1">用户故事的验收标准 <a class="header-anchor" href="#用户故事的验收标准" aria-label="Permalink to &quot;用户故事的验收标准&quot;">​</a></h3><p>每个用户故事都应该有验收标准：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 用户故事：文章发布</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">作为博主，我希望发布文章，以便分享我的技术经验</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 验收标准</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以输入标题（1-100 字符）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以输入正文（支持 Markdown）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以选择分类（至少选一个）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 可以添加标签（最多 5 个）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 发布成功后跳转到文章详情页</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 发布成功后在列表页可见</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 边界情况</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 标题为空：显示错误提示</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 正文为空：显示错误提示</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 网络失败：保存为草稿</span></span></code></pre></div><h3 id="invest-原则" tabindex="-1">INVEST 原则 <a class="header-anchor" href="#invest-原则" aria-label="Permalink to &quot;INVEST 原则&quot;">​</a></h3><p>好的用户故事应该符合 INVEST 原则：</p><table tabindex="0"><thead><tr><th>原则</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td><strong>I</strong>ndependent</td><td>独立，不依赖其他故事</td><td>登录和注册可以分开做</td></tr><tr><td><strong>N</strong>egotiable</td><td>可协商，细节可讨论</td><td>密码规则可以再定</td></tr><tr><td><strong>V</strong>aluable</td><td>有价值，对用户有意义</td><td>不做&quot;为了技术而技术&quot;的功能</td></tr><tr><td><strong>E</strong>stimable</td><td>可估算，能评估工作量</td><td>大故事要拆小</td></tr><tr><td><strong>S</strong>mall</td><td>小，几天内能完成</td><td>太大就拆分</td></tr><tr><td><strong>T</strong>estable</td><td>可测试，有验收标准</td><td>知道什么算&quot;完成&quot;</td></tr></tbody></table><h3 id="用户故事拆分" tabindex="-1">用户故事拆分 <a class="header-anchor" href="#用户故事拆分" aria-label="Permalink to &quot;用户故事拆分&quot;">​</a></h3><p>太大的故事需要拆分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 作为用户，我希望完整的认证系统</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 拆分为：</span></span>
<span class="line"><span>1. 作为用户，我希望注册账号</span></span>
<span class="line"><span>2. 作为用户，我希望登录账号</span></span>
<span class="line"><span>3. 作为用户，我希望重置密码</span></span>
<span class="line"><span>4. 作为用户，我希望修改个人信息</span></span></code></pre></div><h3 id="让-ai-帮你写用户故事" tabindex="-1">让 AI 帮你写用户故事 <a class="header-anchor" href="#让-ai-帮你写用户故事" aria-label="Permalink to &quot;让 AI 帮你写用户故事&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我要做一个博客系统，帮我写用户故事</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI：## 博客系统用户故事</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 内容管理</span></span>
<span class="line"><span>1. 作为博主，我希望创建文章，以便分享我的知识</span></span>
<span class="line"><span>2. 作为博主，我希望编辑文章，以便修正错误</span></span>
<span class="line"><span>3. 作为博主，我希望删除文章，以便移除过时内容</span></span>
<span class="line"><span>4. 作为博主，我希望保存草稿，以便稍后继续编辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 内容消费</span></span>
<span class="line"><span>1. 作为读者，我希望浏览文章列表，以便发现内容</span></span>
<span class="line"><span>2. 作为读者，我希望阅读文章详情，以便学习知识</span></span>
<span class="line"><span>3. 作为读者，我希望搜索文章，以便快速定位</span></span>
<span class="line"><span>...</span></span></code></pre></div><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>每个功能都写用户故事</strong>：养成习惯</li><li><strong>不要跳过&quot;以便&quot;</strong>：这是理解需求的关键</li><li><strong>用 AI 生成初稿</strong>：然后你来修改完善</li><li><strong>保持简短</strong>：一个故事描述一个功能点</li></ol>`,27)])])}const g=a(l,[["render",p]]);export{c as __pageData,g as default};
