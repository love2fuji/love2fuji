import{_ as a,c as n,o as p,a3 as l}from"./chunks/framework.CUcrqFol.js";const u=JSON.parse('{"title":"A.2 代码修改类模板","description":"A.2 代码修改类模板 本节提供修改现有代码的 Prompt 模板，包括功能扩展、代码重构、性能优化和样式调整。 模板一：功能扩展 适用于：在现有代码基础上添加新功能 [语言] [粘贴现有代码] 填写示例：待办清单添加\\"撤销删除\\"功能 tsx function TaskList({ tasks, onDelete })","frontmatter":{"title":"A.2 代码修改类模板"},"headers":[],"relativePath":"Basic/03-technique/appendix/A.2-code-modification.md","filePath":"Basic/03-technique/appendix/A.2-code-modification.md","lastUpdated":1765094268000}'),i={name:"Basic/03-technique/appendix/A.2-code-modification.md"};function e(t,s,o,c,r,d){return p(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="a-2-代码修改类模板" tabindex="-1">A.2 代码修改类模板 <a class="header-anchor" href="#a-2-代码修改类模板" aria-label="Permalink to &quot;A.2 代码修改类模板&quot;">​</a></h1><p>本节提供修改现有代码的 Prompt 模板，包括功能扩展、代码重构、性能优化和样式调整。</p><h2 id="模板一-功能扩展" tabindex="-1">模板一：功能扩展 <a class="header-anchor" href="#模板一-功能扩展" aria-label="Permalink to &quot;模板一：功能扩展&quot;">​</a></h2><p>适用于：在现有代码基础上添加新功能</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 当前状态</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**项目背景**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">简述项目是做什么的</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**技术栈**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">使用的技术</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**要扩展的模块**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">哪个文件/组件</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 现有代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`[语言]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[粘贴现有代码]</span></span></code></pre></div><h2 id="扩展需求" tabindex="-1">扩展需求 <a class="header-anchor" href="#扩展需求" aria-label="Permalink to &quot;扩展需求&quot;">​</a></h2><p><strong>新增功能</strong>：[描述要添加什么功能]</p><p><strong>功能细节</strong>：</p><ul><li>[细节1]</li><li>[细节2]</li><li>[细节3]</li></ul><p><strong>触发方式</strong>：[用户如何触发这个功能] <strong>预期结果</strong>：[功能执行后应该发生什么]</p><h2 id="约束条件" tabindex="-1">约束条件 <a class="header-anchor" href="#约束条件" aria-label="Permalink to &quot;约束条件&quot;">​</a></h2><p><strong>必须保持</strong>：</p><ul><li>[现有功能A 不能受影响]</li><li>[现有功能B 要继续正常工作]</li></ul><p><strong>不要改动</strong>：</p><ul><li>[不要修改的部分1]</li><li>[不要修改的部分2]</li></ul><h2 id="输出要求" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><ul><li>[ ] 只输出修改后的代码，不需要重复未修改的部分</li><li>[ ] 用注释标注新增的代码</li><li>[ ] 说明需要额外安装的依赖（如有）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 填写示例：待办清单添加&quot;撤销删除&quot;功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 当前状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**项目背景**：个人待办清单网页应用</span></span>
<span class="line"><span>**技术栈**：React + TypeScript + Tailwind CSS</span></span>
<span class="line"><span>**要扩展的模块**：TaskList.tsx 组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 现有代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`tsx</span></span>
<span class="line"><span>function TaskList({ tasks, onDelete }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      {tasks.map(task =&gt; (</span></span>
<span class="line"><span>        &lt;li key={task.id}&gt;</span></span>
<span class="line"><span>          {task.content}</span></span>
<span class="line"><span>          &lt;button onClick={() =&gt; onDelete(task.id)}&gt;删除&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>      ))}</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="扩展需求-1" tabindex="-1">扩展需求 <a class="header-anchor" href="#扩展需求-1" aria-label="Permalink to &quot;扩展需求&quot;">​</a></h2><p><strong>新增功能</strong>：删除任务后显示&quot;撤销&quot;提示，3 秒内可恢复</p><p><strong>功能细节</strong>：</p><ul><li>删除任务后，底部显示&quot;已删除，点击撤销&quot;提示</li><li>提示显示 3 秒后自动消失</li><li>点击&quot;撤销&quot;按钮，任务恢复到原位置</li><li>同时只能有一个撤销提示</li></ul><p><strong>触发方式</strong>：用户点击删除按钮 <strong>预期结果</strong>：任务从列表消失，底部出现撤销提示</p><h2 id="约束条件-1" tabindex="-1">约束条件 <a class="header-anchor" href="#约束条件-1" aria-label="Permalink to &quot;约束条件&quot;">​</a></h2><p><strong>必须保持</strong>：</p><ul><li>现有的任务展示逻辑不变</li><li>删除按钮的位置和样式不变</li></ul><p><strong>不要改动</strong>：</p><ul><li>不要改变 props 的类型定义</li><li>不要引入新的状态管理库</li></ul><h2 id="输出要求-1" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-1" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><ul><li>[x] 只输出修改后的代码</li><li>[x] 用注释标注新增的代码</li><li>[ ] 说明需要额外安装的依赖</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板二：代码重构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：改进代码质量、提高可读性、统一代码风格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 重构目标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**当前问题**：[代码现在有什么问题]</span></span>
<span class="line"><span>**期望改进**：[重构后希望达到什么效果]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 待重构代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[粘贴需要重构的代码]</span></span></code></pre></div><h2 id="重构要求" tabindex="-1">重构要求 <a class="header-anchor" href="#重构要求" aria-label="Permalink to &quot;重构要求&quot;">​</a></h2><p><strong>方向</strong>：[可多选]</p><ul><li>[ ] 提高可读性（变量命名、函数拆分）</li><li>[ ] 减少重复代码（提取公共函数）</li><li>[ ] 统一代码风格</li><li>[ ] 添加类型定义（TypeScript）</li><li>[ ] 改进错误处理</li><li>[ ] 其他：[具体说明]</li></ul><p><strong>必须保持</strong>：</p><ul><li>功能行为完全不变</li><li>[其他约束]</li></ul><p><strong>参考规范</strong>（可选）： [如果有特定的代码规范，可以贴在这里]</p><h2 id="输出要求-2" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-2" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请提供：</p><ol><li>重构后的完整代码</li><li>简要说明做了哪些改动</li><li>改动的理由</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 填写示例：重构重复的表单验证代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 重构目标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**当前问题**：注册、登录、修改密码三个表单都有类似的验证代码，复制粘贴了三遍</span></span>
<span class="line"><span>**期望改进**：提取公共的验证函数，减少重复</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 待重构代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>// 注册表单</span></span>
<span class="line"><span>function validateRegister(data) {</span></span>
<span class="line"><span>  if (!data.email || !data.email.includes(&#39;@&#39;)) {</span></span>
<span class="line"><span>    return &#39;邮箱格式不正确&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (!data.password || data.password.length &lt; 8) {</span></span>
<span class="line"><span>    return &#39;密码至少8位&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (data.password !== data.confirmPassword) {</span></span>
<span class="line"><span>    return &#39;两次密码不一致&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 登录表单</span></span>
<span class="line"><span>function validateLogin(data) {</span></span>
<span class="line"><span>  if (!data.email || !data.email.includes(&#39;@&#39;)) {</span></span>
<span class="line"><span>    return &#39;邮箱格式不正确&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (!data.password || data.password.length &lt; 8) {</span></span>
<span class="line"><span>    return &#39;密码至少8位&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改密码表单</span></span>
<span class="line"><span>function validateChangePassword(data) {</span></span>
<span class="line"><span>  if (!data.oldPassword || data.oldPassword.length &lt; 8) {</span></span>
<span class="line"><span>    return &#39;旧密码至少8位&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (!data.newPassword || data.newPassword.length &lt; 8) {</span></span>
<span class="line"><span>    return &#39;新密码至少8位&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (data.newPassword !== data.confirmPassword) {</span></span>
<span class="line"><span>    return &#39;两次密码不一致&#39;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return null;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="重构要求-1" tabindex="-1">重构要求 <a class="header-anchor" href="#重构要求-1" aria-label="Permalink to &quot;重构要求&quot;">​</a></h2><p><strong>方向</strong>：</p><ul><li>[x] 减少重复代码（提取公共函数）</li><li>[x] 添加类型定义（TypeScript）</li><li>[x] 改进错误处理（支持返回多个错误）</li></ul><p><strong>必须保持</strong>：</p><ul><li>功能行为完全不变</li><li>错误信息文案保持一致</li></ul><h2 id="输出要求-3" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-3" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请提供：</p><ol><li>重构后的完整代码</li><li>简要说明做了哪些改动</li><li>如何在原有表单中使用新的验证函数</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板三：性能优化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：页面加载慢、操作卡顿、内存占用高</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 性能问题描述</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**问题现象**：[具体描述慢在哪里、卡在哪里]</span></span>
<span class="line"><span>**触发条件**：[什么情况下会出现这个问题]</span></span>
<span class="line"><span>**影响程度**：[大概延迟多久、卡顿多久]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 相关代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[粘贴可能导致性能问题的代码]</span></span></code></pre></div><h2 id="优化目标" tabindex="-1">优化目标 <a class="header-anchor" href="#优化目标" aria-label="Permalink to &quot;优化目标&quot;">​</a></h2><p><strong>期望效果</strong>：[优化后应该达到什么程度] <strong>度量标准</strong>：[如何判断优化成功]</p><h2 id="已知信息" tabindex="-1">已知信息 <a class="header-anchor" href="#已知信息" aria-label="Permalink to &quot;已知信息&quot;">​</a></h2><p><strong>数据规模</strong>：[处理的数据量大概多少] <strong>运行环境</strong>：[浏览器/Node.js/移动端] <strong>已尝试的优化</strong>：[如果有的话]</p><h2 id="约束条件-2" tabindex="-1">约束条件 <a class="header-anchor" href="#约束条件-2" aria-label="Permalink to &quot;约束条件&quot;">​</a></h2><ul><li>功能逻辑不能改变</li><li>[其他约束]</li></ul><h2 id="输出要求-4" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-4" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请提供：</p><ol><li>优化后的代码</li><li>解释性能问题的原因</li><li>优化的原理和效果预估</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板四：样式调整</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：UI 美化、布局修改、响应式适配</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 当前样式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**问题描述**：[当前界面哪里不满意]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**当前代码**：</span></span>
<span class="line"><span>\`\`\`[css/html]</span></span>
<span class="line"><span>[粘贴当前样式相关代码]</span></span></code></pre></div><h2 id="期望效果" tabindex="-1">期望效果 <a class="header-anchor" href="#期望效果" aria-label="Permalink to &quot;期望效果&quot;">​</a></h2><p><strong>描述</strong>：[用文字描述想要的效果]</p><p><strong>参考</strong>（可选）：</p><ul><li>参考网站：[URL]</li><li>参考图片：[描述或链接]</li><li>关键词：[简洁/现代/圆角/阴影/渐变/...]</li></ul><h2 id="具体要求" tabindex="-1">具体要求 <a class="header-anchor" href="#具体要求" aria-label="Permalink to &quot;具体要求&quot;">​</a></h2><p><strong>布局调整</strong>：</p><ul><li>[调整1]</li><li>[调整2]</li></ul><p><strong>视觉效果</strong>：</p><ul><li>[效果1]</li><li>[效果2]</li></ul><p><strong>响应式</strong>：</p><ul><li>桌面端（&gt;1024px）：[要求]</li><li>平板端（768-1024px）：[要求]</li><li>手机端（&lt;768px）：[要求]</li></ul><h2 id="技术约束" tabindex="-1">技术约束 <a class="header-anchor" href="#技术约束" aria-label="Permalink to &quot;技术约束&quot;">​</a></h2><p><strong>使用技术</strong>：[Tailwind CSS/原生 CSS/其他] <strong>必须兼容</strong>：[浏览器版本要求]</p><h2 id="输出要求-5" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-5" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请提供修改后的样式代码，并标注改动的部分。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 模板五：代码迁移（精简版）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用于：升级框架版本、更换技术栈</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>## 迁移需求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**原技术**：[如 React Class 组件]</span></span>
<span class="line"><span>**目标技术**：[如 React Hooks 函数组件]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 原代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[粘贴需要迁移的代码]</span></span></code></pre></div><h2 id="迁移要求" tabindex="-1">迁移要求 <a class="header-anchor" href="#迁移要求" aria-label="Permalink to &quot;迁移要求&quot;">​</a></h2><ul><li>保持功能完全一致</li><li>遵循目标技术的最佳实践</li><li>[其他要求]</li></ul><h2 id="输出要求-6" tabindex="-1">输出要求 <a class="header-anchor" href="#输出要求-6" aria-label="Permalink to &quot;输出要求&quot;">​</a></h2><p>请提供迁移后的代码，并说明主要改动点。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 精简版：快速修改模板</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当你只需要做一个小改动时，可以使用这个精简版：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span>请修改以下代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`[语言]</span></span>
<span class="line"><span>[代码]</span></span></code></pre></div><p><strong>修改内容</strong>：[简述要改什么]</p><p><strong>约束</strong>：</p><ul><li>保持其他部分不变</li><li>[其他约束]</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常见填写误区</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 误区 | 问题 | 正确做法 |</span></span>
<span class="line"><span>|-----|------|---------|</span></span>
<span class="line"><span>| 不贴现有代码 | AI 无法了解上下文 | 贴出相关的代码片段 |</span></span>
<span class="line"><span>| 只说&quot;优化一下&quot; | 不知道优化什么方向 | 明确是可读性/性能/结构 |</span></span>
<span class="line"><span>| 忘记说&quot;不要改&quot; | AI 可能重构整个文件 | 明确边界，哪些不动 |</span></span>
<span class="line"><span>| 参考描述太抽象 | &quot;好看一点&quot;太模糊 | 给参考网站或具体描述 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 本节要点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- ✅ **功能扩展**：贴出现有代码 + 描述新功能 + 明确不能动的部分</span></span>
<span class="line"><span>- ✅ **代码重构**：明确重构方向 + 保证功能不变</span></span>
<span class="line"><span>- ✅ **性能优化**：描述问题现象 + 给出数据规模 + 设定度量标准</span></span>
<span class="line"><span>- ✅ **样式调整**：提供参考 + 具体描述期望效果</span></span></code></pre></div>`,85)])])}const g=a(i,[["render",e]]);export{u as __pageData,g as default};
