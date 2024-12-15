1.public/ 目录

favicon.ico: 网站/应用的标志性小图标，显示在浏览器标签页上
用于存放不需要webpack/vite处理的静态资源


2.src/assets/ 目录


logo.png: 应用的logo图片
styles/tailwind.css: Tailwind CSS的全局样式入口文件，用于导入Tailwind的基础样式和自定义样式


3.src/components/ 目录 - 可复用的Vue组件


common/

Header.vue: 应用的公共头部组件
BottomNavigation.vue: 底部导航栏组件


charts/

SleepQualityChart.vue: 睡眠质量图表组件
VitalsLineChart.vue: 生命体征折线图组件


alerts/

AnomalyAlert.vue: 异常情况警报组件




4.src/composables/ 目录 - 可复用的组合式函数(Composition API)


useBCGMonitoring.ts: 处理BCG监测逻辑的组合式函数
useECGData.ts: 处理心电图数据相关逻辑
useSleepAnalysis.ts: 睡眠分析相关逻辑


5.src/layouts/ 目录 - 页面布局组件


MainLayout.vue: 应用的主布局组件，定义整体页面结构


6.src/models/ 目录 - TypeScript类型定义


VitalsData.ts: 定义生命体征数据的接口和类型
SleepReport.ts: 定义睡眠报告的接口和类型


7.src/pages/ 目录 - 页面组件


BCGPage.vue: BCG监测页面
ECGPage.vue: 心电图数据页面
FitnessPage.vue: 健身追踪页面
SleepStatePage.vue: 睡眠状态页面
ReportPage.vue: 报告页面


8.src/services/ 目录 - 服务层


apiService.ts: 封装HTTP请求，与后端API交互
socketService.ts: WebSocket服务，处理实时数据传输


9.src/stores/ 目录 - 状态管理(Pinia)


vitalsStore.ts: 管理生命体征相关的全局状态
userStore.ts: 管理用户相关的全局状态


10.src/router/ 目录 - 路由配置


index.ts: 定义应用的路由规则和页面跳转逻辑


11.根目录配置文件


package.json: 定义项目依赖、脚本等
tsconfig.json: TypeScript编译配置
tailwind.config.js: Tailwind CSS配置
vite.config.ts: Vite构建工具配置
README.md: 项目说明文档


12.主要入口文件


src/App.vue: 应用的根组件，定义整体布局和路由视图
src/main.ts: 应用的入口文件，负责初始化Vue实例、路由和状态管理


13.项目架构遵循了现代Vue 3前端开发的最佳实践：

模块化
组合式API
TypeScript类型安全
状态管理
组件化
响应式设计

这种结构使得代码易于维护、扩展和测试。每个目录和文件都有明确的职责，便于团队协作和后续迭代。