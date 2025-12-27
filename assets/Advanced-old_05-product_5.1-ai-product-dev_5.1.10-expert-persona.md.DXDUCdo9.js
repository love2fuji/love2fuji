import{_ as s,c as n,o as p,a3 as t}from"./chunks/framework.CUcrqFol.js";const u=JSON.parse('{"title":"5.1.10 把 AI 变成专家顾问——批判性专家角色","description":"5.1.10 把 AI 变成专家顾问——批判性专家角色 一句话破题 让 AI 扮演**批判性专家**，它会从\\"挑毛病\\"的角度帮你发现问题。 为什么需要专家角色 默认情况下，AI 倾向于\\"顺从\\"——你说什么它就做什么。但有时我们需要它\\"唱反调\\"： 找出代码中的潜在问题 指出方案的风险和不足 提供不同的视角和建议 如何激活","frontmatter":{"title":"5.1.10 把 AI 变成专家顾问——批判性专家角色","typora-root-url":"../../public"},"headers":[],"relativePath":"Advanced-old/05-product/5.1-ai-product-dev/5.1.10-expert-persona.md","filePath":"Advanced-old/05-product/5.1-ai-product-dev/5.1.10-expert-persona.md","lastUpdated":1766168364000}'),e={name:"Advanced-old/05-product/5.1-ai-product-dev/5.1.10-expert-persona.md"};function l(i,a,o,r,d,c){return p(),n("div",null,[...a[0]||(a[0]=[t(`<h1 id="_5-1-10-把-ai-变成专家顾问——批判性专家角色" tabindex="-1">5.1.10 把 AI 变成专家顾问——批判性专家角色 <a class="header-anchor" href="#_5-1-10-把-ai-变成专家顾问——批判性专家角色" aria-label="Permalink to &quot;5.1.10 把 AI 变成专家顾问——批判性专家角色&quot;">​</a></h1><h3 id="一句话破题" tabindex="-1">一句话破题 <a class="header-anchor" href="#一句话破题" aria-label="Permalink to &quot;一句话破题&quot;">​</a></h3><p>让 AI 扮演<strong>批判性专家</strong>，它会从&quot;挑毛病&quot;的角度帮你发现问题。</p><h3 id="为什么需要专家角色" tabindex="-1">为什么需要专家角色 <a class="header-anchor" href="#为什么需要专家角色" aria-label="Permalink to &quot;为什么需要专家角色&quot;">​</a></h3><p>默认情况下，AI 倾向于&quot;顺从&quot;——你说什么它就做什么。但有时我们需要它&quot;唱反调&quot;：</p><ul><li>找出代码中的潜在问题</li><li>指出方案的风险和不足</li><li>提供不同的视角和建议</li></ul><h3 id="如何激活专家模式" tabindex="-1">如何激活专家模式 <a class="header-anchor" href="#如何激活专家模式" aria-label="Permalink to &quot;如何激活专家模式&quot;">​</a></h3><p><strong>方法一：明确指定角色</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你现在是一位资深的后端架构师，有 10 年的 Node.js 和数据库设计经验。</span></span>
<span class="line"><span>请审查以下代码，从性能、安全、可维护性三个角度给出批评意见。</span></span>
<span class="line"><span>不要客气，尽管指出问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[你的代码]</span></span></code></pre></div><p><strong>方法二：要求提供反对意见</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我打算用这个方案实现用户认证：[方案描述]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请扮演一位安全专家，列出这个方案可能存在的安全隐患，</span></span>
<span class="line"><span>以及在什么场景下会出问题。</span></span></code></pre></div><p><strong>方法三：多角色对话</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请分别从以下角色的角度评价这个 API 设计：</span></span>
<span class="line"><span>1. 前端开发者：调用是否方便？</span></span>
<span class="line"><span>2. 后端开发者：实现是否合理？</span></span>
<span class="line"><span>3. 运维工程师：是否容易监控和维护？</span></span></code></pre></div><h3 id="实战示例" tabindex="-1">实战示例 <a class="header-anchor" href="#实战示例" aria-label="Permalink to &quot;实战示例&quot;">​</a></h3><p><strong>场景</strong>：你设计了一个用户注册 API，想让 AI 帮忙审查</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我设计了一个用户注册接口：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>POST /api/users</span></span>
<span class="line"><span>Body: { email, password, name }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>功能：</span></span>
<span class="line"><span>1. 验证邮箱格式</span></span>
<span class="line"><span>2. 密码 hash 后存储</span></span>
<span class="line"><span>3. 返回创建的用户信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请你扮演一位安全顾问，告诉我这个设计有哪些安全隐患？</span></span></code></pre></div><p><strong>AI 的专家视角回复</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>作为安全顾问，我发现以下问题：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 缺少速率限制</span></span>
<span class="line"><span>   - 风险：攻击者可以暴力注册大量账号</span></span>
<span class="line"><span>   - 建议：限制每个 IP 每分钟的注册次数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 响应信息泄露</span></span>
<span class="line"><span>   - 风险：如果返回&quot;邮箱已存在&quot;，攻击者可以枚举已注册用户</span></span>
<span class="line"><span>   - 建议：统一返回&quot;注册失败&quot;，具体原因通过邮件告知</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 缺少邮箱验证</span></span>
<span class="line"><span>   - 风险：用户可以使用他人邮箱注册</span></span>
<span class="line"><span>   - 建议：发送验证邮件，验证后才激活账号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 密码强度未检查</span></span>
<span class="line"><span>   - 风险：用户可能设置弱密码</span></span>
<span class="line"><span>   - 建议：要求密码包含大小写字母、数字，长度至少 8 位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 缺少 CSRF 保护</span></span>
<span class="line"><span>   - 风险：跨站请求可能伪造注册</span></span>
<span class="line"><span>   - 建议：添加 CSRF Token 验证</span></span></code></pre></div><h3 id="常用的专家角色" tabindex="-1">常用的专家角色 <a class="header-anchor" href="#常用的专家角色" aria-label="Permalink to &quot;常用的专家角色&quot;">​</a></h3><table tabindex="0"><thead><tr><th>角色</th><th>关注点</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>安全专家</strong></td><td>安全漏洞、攻击向量</td><td>API 设计、认证流程</td></tr><tr><td><strong>性能工程师</strong></td><td>响应时间、资源占用</td><td>数据库查询、算法设计</td></tr><tr><td><strong>代码审查员</strong></td><td>可读性、规范、最佳实践</td><td>代码提交前</td></tr><tr><td><strong>用户体验师</strong></td><td>交互流程、用户感受</td><td>前端设计、流程设计</td></tr><tr><td><strong>测试工程师</strong></td><td>边界情况、异常场景</td><td>功能完成后</td></tr></tbody></table><h3 id="专家模式的使用技巧" tabindex="-1">专家模式的使用技巧 <a class="header-anchor" href="#专家模式的使用技巧" aria-label="Permalink to &quot;专家模式的使用技巧&quot;">​</a></h3><ol><li><strong>明确专业领域</strong>：不是泛泛的&quot;专家&quot;，而是&quot;安全专家&quot;、&quot;性能专家&quot;</li><li><strong>设定经验背景</strong>：&quot;10 年经验的架构师&quot;比&quot;专家&quot;更有说服力</li><li><strong>要求具体问题</strong>：&quot;列出 5 个具体问题&quot;比&quot;看看有什么问题&quot;更有效</li><li><strong>鼓励严格批评</strong>：&quot;不要客气&quot;、&quot;尽管批评&quot;可以让 AI 更直接</li></ol><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li><strong>专家意见仅供参考</strong>：AI 可能会编造不存在的问题</li><li><strong>验证建议的正确性</strong>：重要的安全建议要自己核实</li><li><strong>平衡批评与实际</strong>：不是所有建议都需要采纳，根据项目实际情况取舍</li></ul>`,24)])])}const g=s(e,[["render",l]]);export{u as __pageData,g as default};
