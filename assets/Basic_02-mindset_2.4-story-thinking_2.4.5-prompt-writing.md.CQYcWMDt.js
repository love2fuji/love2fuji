import{_ as a,c as i,o as n,a3 as t}from"./chunks/framework.CUcrqFol.js";const c=JSON.parse('{"title":"2.4.5 用故事思维写 Prompt：让 AI 真正理解你","description":"2.4.5 用故事思维写 Prompt：让 AI 真正理解你 同样的需求，不同的结果 来看两个 Prompt 的对比： 无故事版本 有故事版本 第二个 Prompt 比第一个长很多，但 AI 的输出会有本质区别。 区别在哪里 | 方面 | 无故事版本 | 有故事版本 | |-----|-----------|-----","frontmatter":{"title":"2.4.5 用故事思维写 Prompt：让 AI 真正理解你"},"headers":[],"relativePath":"Basic/02-mindset/2.4-story-thinking/2.4.5-prompt-writing.md","filePath":"Basic/02-mindset/2.4-story-thinking/2.4.5-prompt-writing.md","lastUpdated":1765094268000}'),l={name:"Basic/02-mindset/2.4-story-thinking/2.4.5-prompt-writing.md"};function p(h,s,e,k,d,r){return n(),i("div",null,[...s[0]||(s[0]=[t(`<h1 id="_2-4-5-用故事思维写-prompt-让-ai-真正理解你" tabindex="-1">2.4.5 用故事思维写 Prompt：让 AI 真正理解你 <a class="header-anchor" href="#_2-4-5-用故事思维写-prompt-让-ai-真正理解你" aria-label="Permalink to &quot;2.4.5 用故事思维写 Prompt：让 AI 真正理解你&quot;">​</a></h1><h2 id="同样的需求-不同的结果" tabindex="-1">同样的需求，不同的结果 <a class="header-anchor" href="#同样的需求-不同的结果" aria-label="Permalink to &quot;同样的需求，不同的结果&quot;">​</a></h2><p>来看两个 Prompt 的对比：</p><h3 id="无故事版本" tabindex="-1">无故事版本 <a class="header-anchor" href="#无故事版本" aria-label="Permalink to &quot;无故事版本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>帮我做一个待办清单工具，需要这些功能：</span></span>
<span class="line"><span>1. 添加任务</span></span>
<span class="line"><span>2. 完成任务</span></span>
<span class="line"><span>3. 查看任务列表</span></span></code></pre></div><h3 id="有故事版本" tabindex="-1">有故事版本 <a class="header-anchor" href="#有故事版本" aria-label="Permalink to &quot;有故事版本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我想做一个待办清单工具，先介绍一下背景：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我是一个互联网公司的运营，每天大概有 10 件以上的事要处理——工作任务、要回的消息、要买的东西、要处理的杂事。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我试过用便签纸，但经常丢；试过几个待办 App，但都太复杂了，光是录入任务就累得不想用。我的核心痛点是：怕忘事，脑子里总装着「还有什么没做完」的焦虑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我希望有一个工具能：</span></span>
<span class="line"><span>- 打开就能添加，不用选分类、填日期、设优先级</span></span>
<span class="line"><span>- 一眼看到今天要做什么</span></span>
<span class="line"><span>- 做完一件就划掉，获得那种「搞定」的爽感</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我设计这个工具的界面和核心功能。</span></span></code></pre></div><p>第二个 Prompt 比第一个长很多，但 AI 的输出会有本质区别。</p><h2 id="区别在哪里" tabindex="-1">区别在哪里 <a class="header-anchor" href="#区别在哪里" aria-label="Permalink to &quot;区别在哪里&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方面</th><th>无故事版本</th><th>有故事版本</th></tr></thead><tbody><tr><td><strong>AI 知道用户是谁</strong></td><td>❌ 不知道</td><td>✅ 忙碌的职场人</td></tr><tr><td><strong>AI 知道使用场景</strong></td><td>❌ 不知道</td><td>✅ 每天处理 10+ 事项</td></tr><tr><td><strong>AI 知道约束条件</strong></td><td>❌ 不知道</td><td>✅ 用过复杂 App，需要极简</td></tr><tr><td><strong>AI 知道核心痛点</strong></td><td>❌ 不知道</td><td>✅ 怕忘事、怕焦虑</td></tr><tr><td><strong>AI 能推断优先级</strong></td><td>❌ 只能猜</td><td>✅ 简单 &gt; 功能多</td></tr></tbody></table><p>有了故事背景，AI 可以做出更合理的设计决策：</p><ul><li>界面会更简洁，而不是堆满功能</li><li>添加任务会设计成一步完成，而不是多个表单</li><li>完成任务时会加入满足感的反馈</li></ul><h2 id="故事化-prompt-的四个要素" tabindex="-1">故事化 Prompt 的四个要素 <a class="header-anchor" href="#故事化-prompt-的四个要素" aria-label="Permalink to &quot;故事化 Prompt 的四个要素&quot;">​</a></h2><p>一个好的故事化 Prompt 应该包含四个要素：</p><table tabindex="0"><thead><tr><th>要素</th><th>回答的问题</th><th>作用</th></tr></thead><tbody><tr><td><strong>身份</strong></td><td>我是谁？</td><td>让 AI 理解用户特征</td></tr><tr><td><strong>现状</strong></td><td>我现在怎么做？遇到什么问题？</td><td>让 AI 理解背景和约束</td></tr><tr><td><strong>痛点</strong></td><td>我最困扰的是什么？</td><td>让 AI 明确核心问题</td></tr><tr><td><strong>期望</strong></td><td>我希望达到什么效果？</td><td>让 AI 知道成功标准</td></tr></tbody></table><h2 id="通用故事化-prompt-模板" tabindex="-1">通用故事化 Prompt 模板 <a class="header-anchor" href="#通用故事化-prompt-模板" aria-label="Permalink to &quot;通用故事化 Prompt 模板&quot;">​</a></h2><p>可以直接复制使用的模板：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我想做 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">项目类型</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]，先介绍一下背景：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我是谁</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">描述用户身份、基本情况</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的现状</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">描述现在是怎么做的、用什么工具、有什么问题</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的痛点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">描述最困扰的问题、为什么困扰</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的期望</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">描述希望达到的效果，包括功能和感受</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">具体请求：设计/实现/分析</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]。</span></span></code></pre></div><h2 id="多场景-prompt-示例" tabindex="-1">多场景 Prompt 示例 <a class="header-anchor" href="#多场景-prompt-示例" aria-label="Permalink to &quot;多场景 Prompt 示例&quot;">​</a></h2><h3 id="场景一-做产品" tabindex="-1">场景一：做产品 <a class="header-anchor" href="#场景一-做产品" aria-label="Permalink to &quot;场景一：做产品&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我想做一个习惯打卡工具，先介绍一下背景：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我是谁</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我是一个想养成早起习惯的上班族，之前坚持过很多次都失败了。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的现状</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 用过几个习惯 App，界面花哨、功能太多</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每天要点好几下才能完成打卡，烦得不想用</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 最终都是用了几天就放弃了</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的痛点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">打卡太麻烦，让我觉得「打卡」本身成了负担，而不是帮助。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的期望</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 打开就能打卡，最好就一个按钮</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 能看到连续打卡天数，给我坚持的动力</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 界面极简，没有多余的东西分散注意力</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我设计这个工具的界面和交互流程。</span></span></code></pre></div><h3 id="场景二-数据分析" tabindex="-1">场景二：数据分析 <a class="header-anchor" href="#场景二-数据分析" aria-label="Permalink to &quot;场景二：数据分析&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我需要做一份销售数据分析，先介绍一下背景：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我是谁</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我是一个电商公司的运营，需要向老板汇报 Q3 的销售情况。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的现状</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 手里有三个月的订单数据（Excel 格式）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 老板每周一早上只有 15 分钟看报告</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 上次做的报告太长，老板看了两页就放下了</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的痛点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">不知道老板最关心什么，报告总是抓不住重点。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的期望</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 一份老板能在 5 分钟内看完的报告</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第一页就能看到最重要的结论</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有明确的行动建议，不只是数据展示</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我规划这份报告的结构和核心图表。</span></span></code></pre></div><h3 id="场景三-自动化脚本" tabindex="-1">场景三：自动化脚本 <a class="header-anchor" href="#场景三-自动化脚本" aria-label="Permalink to &quot;场景三：自动化脚本&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我想写一个自动化脚本，先介绍一下背景：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我是谁</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我是公司的财务，每周五要汇总 5 个部门的周报。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的现状</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每周五下午花 2 小时做这个事情</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 流程是：打开 5 个 Excel → 复制数据 → 粘贴到汇总表 → 调整格式</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有时候会漏数据或者格式出错，要反复检查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的痛点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这个工作重复又无聊，但不能出错，所以特别累心。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我的期望</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 点一下就能自动汇总</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输出的格式和我手动做的一样</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 我只需要快速检查一下结果就行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我设计这个脚本的逻辑，用 Python 实现。</span></span></code></pre></div><h3 id="场景四-给家人做工具" tabindex="-1">场景四：给家人做工具 <a class="header-anchor" href="#场景四-给家人做工具" aria-label="Permalink to &quot;场景四：给家人做工具&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">我想给我 60 岁的妈妈做一个吃药提醒，先介绍一下背景：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 我是谁（用户是我妈妈）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 62 岁，退休教师，独居</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有高血压，每天早晚各吃一次药</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 会用微信、看短视频，其他 App 用得少</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 她的现状</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 靠记忆吃药，经常忘记自己吃过没有</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有时候重复吃，有时候忘吃</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不愿意麻烦我，但我其实很担心</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 她的痛点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">记性不好，但又不想承认自己记性不好。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 她的期望</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 字要大，她眼神不太好</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 操作要少，最好就一个按钮</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 能让我远程看到她今天吃药没有</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请帮我设计一个她能用的吃药提醒页面。</span></span></code></pre></div><h2 id="ai-输出对比" tabindex="-1">AI 输出对比 <a class="header-anchor" href="#ai-输出对比" aria-label="Permalink to &quot;AI 输出对比&quot;">​</a></h2><p>以待办清单为例，看看两种 Prompt 的 AI 输出差异：</p><h3 id="无故事版本的典型输出" tabindex="-1">无故事版本的典型输出 <a class="header-anchor" href="#无故事版本的典型输出" aria-label="Permalink to &quot;无故事版本的典型输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这是一个基础的待办清单设计：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 顶部有一个输入框，用于添加任务</span></span>
<span class="line"><span>2. 下方是任务列表，每个任务有：</span></span>
<span class="line"><span>   - 复选框（标记完成）</span></span>
<span class="line"><span>   - 任务文本</span></span>
<span class="line"><span>   - 删除按钮</span></span>
<span class="line"><span>3. 可以考虑添加以下功能：</span></span>
<span class="line"><span>   - 任务分类</span></span>
<span class="line"><span>   - 截止日期</span></span>
<span class="line"><span>   - 优先级标签</span></span>
<span class="line"><span>   ...</span></span></code></pre></div><h3 id="有故事版本的典型输出" tabindex="-1">有故事版本的典型输出 <a class="header-anchor" href="#有故事版本的典型输出" aria-label="Permalink to &quot;有故事版本的典型输出&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>基于你的需求，我建议一个极简设计：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>界面只有两个元素：</span></span>
<span class="line"><span>1. 一个大输入框，点击就能开始输入，回车直接添加</span></span>
<span class="line"><span>2. 任务列表，点击任务就标记完成（有划线动画和轻微震动反馈）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设计原则：</span></span>
<span class="line"><span>- 没有分类、日期、优先级——减少录入负担</span></span>
<span class="line"><span>- 完成动画要有满足感——一个简单的「√」动画</span></span>
<span class="line"><span>- 整体色调简洁，不花哨</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特别说明：</span></span>
<span class="line"><span>- 考虑到你说「录入比做事还累」，所以删掉了所有非必要字段</span></span>
<span class="line"><span>- 考虑到你说「搞定的爽感」，完成时会有小动画</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>区别很明显：有故事的版本给出了更贴合需求的设计，而且能解释「为什么这样设计」。</p><h2 id="本节要点" tabindex="-1">本节要点 <a class="header-anchor" href="#本节要点" aria-label="Permalink to &quot;本节要点&quot;">​</a></h2><p>故事化 Prompt 不是为了「写得长」，而是为了「让 AI 真正理解你」：</p><ul><li>四个要素：身份、现状、痛点、期望</li><li>好的 Prompt 让 AI 能做出推断，而不只是执行指令</li><li>模板可以直接复制使用，根据场景填充内容</li></ul><p>接下来，我们通过实战练习，把故事思维应用到你自己的项目中。</p>`,38)])])}const g=a(l,[["render",p]]);export{c as __pageData,g as default};
