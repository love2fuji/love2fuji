import{_ as n,c as a,o as p,a3 as l}from"./chunks/framework.CUcrqFol.js";const u=JSON.parse('{"title":"5.3.1 如何看透题目要求——AI 辅助需求拆解","description":"5.3.1 如何看透题目要求——AI 辅助需求拆解 一句话破题 让 AI 帮你**从一句话需求中挖出十个具体问题**。 需求拆解的价值 一个看似简单的需求，背后往往藏着大量细节： 让 AI 帮你提问 **Prompt 模板**： **示例对话**： 拆解后的输出 经过 AI 辅助拆解后，你应该能得到： **确定的决策*","frontmatter":{"title":"5.3.1 如何看透题目要求——AI 辅助需求拆解","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.1-deconstruction.md","filePath":"Advanced-old/05-product/5.3-requirements-analysis/5.3.1-deconstruction.md","lastUpdated":1766168364000}'),e={name:"Advanced-old/05-product/5.3-requirements-analysis/5.3.1-deconstruction.md"};function i(t,s,o,c,r,d){return p(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="_5-3-1-如何看透题目要求——ai-辅助需求拆解" tabindex="-1">5.3.1 如何看透题目要求——AI 辅助需求拆解 <a class="header-anchor" href="#_5-3-1-如何看透题目要求——ai-辅助需求拆解" aria-label="Permalink to &quot;5.3.1 如何看透题目要求——AI 辅助需求拆解&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>让 AI 帮你<strong>从一句话需求中挖出十个具体问题</strong>。</p><h3 id="需求拆解的价值" tabindex="-1">需求拆解的价值 <a class="header-anchor" href="#需求拆解的价值" aria-label="Permalink to &quot;需求拆解的价值&quot;">​</a></h3><p>一个看似简单的需求，背后往往藏着大量细节：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>原始需求：&quot;做一个用户登录功能&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>隐藏的问题：</span></span>
<span class="line"><span>- 用什么方式登录？邮箱？手机号？第三方？</span></span>
<span class="line"><span>- 密码有什么要求？长度？复杂度？</span></span>
<span class="line"><span>- 忘记密码怎么办？</span></span>
<span class="line"><span>- 需要验证码吗？什么情况下触发？</span></span>
<span class="line"><span>- 登录失败几次会锁定账号？</span></span>
<span class="line"><span>- Session 还是 JWT？有效期多久？</span></span>
<span class="line"><span>- 需要&quot;记住我&quot;功能吗？</span></span></code></pre></div><h3 id="让-ai-帮你提问" tabindex="-1">让 AI 帮你提问 <a class="header-anchor" href="#让-ai-帮你提问" aria-label="Permalink to &quot;让 AI 帮你提问&quot;">​</a></h3><p><strong>Prompt 模板</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我要实现 [功能描述]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请扮演一个资深产品经理，从以下角度帮我列出需要澄清的问题：</span></span>
<span class="line"><span>1. 用户角度：谁会使用？使用场景是什么？</span></span>
<span class="line"><span>2. 功能角度：具体包含哪些子功能？</span></span>
<span class="line"><span>3. 边界角度：什么情况不支持？</span></span>
<span class="line"><span>4. 技术角度：有什么技术约束？</span></span>
<span class="line"><span>5. 验收角度：怎么判断做完了？</span></span></code></pre></div><p><strong>示例对话</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你：我要实现用户登录功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AI（产品经理视角）：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 需要澄清的问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 用户角度</span></span>
<span class="line"><span>- 目标用户是谁？普通用户还是企业用户？</span></span>
<span class="line"><span>- 用户主要在什么场景下登录？PC/移动端/都有？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 功能角度</span></span>
<span class="line"><span>- 支持哪些登录方式？</span></span>
<span class="line"><span>  - [ ] 邮箱+密码</span></span>
<span class="line"><span>  - [ ] 手机号+验证码</span></span>
<span class="line"><span>  - [ ] 第三方登录（微信/Google/GitHub）</span></span>
<span class="line"><span>- 是否需要&quot;记住登录状态&quot;？</span></span>
<span class="line"><span>- 是否需要多设备登录限制？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 边界角度</span></span>
<span class="line"><span>- 密码要求：最小长度？需要包含特殊字符？</span></span>
<span class="line"><span>- 登录失败处理：几次失败后锁定？锁定多久？</span></span>
<span class="line"><span>- 是否需要验证码？什么情况下触发？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 技术角度</span></span>
<span class="line"><span>- 认证方式：Session 还是 JWT？</span></span>
<span class="line"><span>- Token 有效期多久？</span></span>
<span class="line"><span>- 是否需要 refresh token？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 验收角度</span></span>
<span class="line"><span>- 正常登录成功后跳转到哪里？</span></span>
<span class="line"><span>- 登录失败要显示什么错误信息？</span></span></code></pre></div><h3 id="拆解后的输出" tabindex="-1">拆解后的输出 <a class="header-anchor" href="#拆解后的输出" aria-label="Permalink to &quot;拆解后的输出&quot;">​</a></h3><p>经过 AI 辅助拆解后，你应该能得到：</p><ol><li><strong>确定的决策</strong>：邮箱+密码登录，不支持第三方</li><li><strong>明确的规则</strong>：密码 8-20 位，必须包含字母和数字</li><li><strong>清晰的边界</strong>：失败 5 次锁定 30 分钟</li><li><strong>验收标准</strong>：登录成功返回 token，失败返回错误码</li></ol><h3 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h3><ol><li><strong>先让 AI 提问，再自己回答</strong>：AI 提的问题比你想的全面</li><li><strong>不确定的先记录</strong>：暂时回答不了的问题标记为&quot;待定&quot;</li><li><strong>形成决策文档</strong>：把问答整理成文档，作为后续开发的依据</li></ol>`,16)])])}const g=n(e,[["render",i]]);export{u as __pageData,g as default};
