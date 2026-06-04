# Generate Demo Animation Skill

一个用于制作程序化演示动画的 Codex skill。适用于课堂动画、知识可视化、产品演示、过程讲解、音频/字幕驱动动画等任务，默认优先使用 HyperFrames 或 Remotion，强调可预览、可编辑、可复现、可 seek、可导出。

## 安装方法

### 方法 1：复制到 Codex skills 目录

```bash
git clone https://github.com/Tumi1024/gd-animation-skill.git generate-demo-animation-skill
mkdir -p ~/.codex/skills
cp -R generate-demo-animation-skill ~/.codex/skills/generate-demo-animation
```

重启 Codex 后，发送“生成演示动画”或提出相关动画制作任务即可触发。

### 方法 2：作为本地 skill 开发

```bash
git clone https://github.com/Tumi1024/gd-animation-skill.git
cd generate-demo-animation-skill
```

编辑 `SKILL.md`、`references/`、`memory/` 后，再同步到 `~/.codex/skills/generate-demo-animation`。

## 使用方法

向 Codex 描述要制作的演示动画，例如：

```text
生成演示动画：根据这段脚本制作一个 30 秒科学原理讲解动画，先给场景表、时间轴表和预览方案，不要直接导出成片。
```

推荐输入包含：

- 脚本、旁白或字幕时间轴
- 画布尺寸、时长、帧率
- 使用场景：课程、产品演示、知识解释、流程说明等
- 期望技术栈：HyperFrames 或 Remotion
- 是否需要透明背景、音频、字幕、关键帧截图

执行原则：

- 先做方案和可检查预览，再导出正式视频。
- 动画必须绑定绝对时间或帧号，不能依赖真实时间或无限 CSS 动画。
- 有音频或字幕时，以音频语义和字幕时间戳作为主时间依据。
- 用户明确不要字幕、文本框或 UI 面板时，画面中不得出现相关内容。

## 目录结构

```text
generate-demo-animation-skill/
├── SKILL.md
├── README.md
├── .gitignore
├── agents/
│   └── openai.yaml
├── references/
│   └── production-rules.md
├── memory/
│   ├── rules.json
│   ├── issue_log.md
│   ├── lessons_index.md
│   ├── tags.md
│   └── lessons/
│       ├── L001.md
│       ├── L002.md
│       ├── L003.md
│       └── L004.md
└── examples/
    ├── case_template.md
    └── archived_cases/
        └── .gitkeep
```

## 内容说明

- `SKILL.md`：skill 入口文件，包含触发说明、工作流和硬规则。
- `references/production-rules.md`：动画制作规则库。
- `memory/rules.json`：结构化规则。
- `memory/issue_log.md`：可检索的问题记录库。
- `memory/lessons_index.md` 与 `memory/lessons/`：复用经验索引和 lesson 文件。
- `examples/`：案例模板和后续可沉淀的示例案例。
- `agents/openai.yaml`：Codex UI 展示元数据。



# 贡献经验库（Memory / Rules）

本项目会持续积累动画制作过程中的问题、解决方案和最佳实践。

如果你在使用过程中发现了新的问题或更好的解决方案，欢迎贡献到经验库。

## 贡献步骤

### 1. Fork 本仓库

点击 GitHub 页面右上角 Fork。

### 2. 克隆自己的 Fork

git clone https://github.com/<YOUR_GITHUB_USERNAME>/generate-demo-animation-skill.git

### 3. 添加经验记录

请将新增内容放入：

memory/
rules/
logs/

对应目录。

推荐格式：

- 问题描述
- 复现条件
- 解决方案
- 适用版本

### 4. 提交修改

git add .
git commit -m "Add new animation workflow knowledge"

### 5. 推送

git push origin main

### 6. 提交 Pull Request

回到原项目页面提交 Pull Request。

## 经验库规范

新增记录请尽量使用统一格式：

- Category（分类）
- Problem（问题）
- Cause（原因）
- Solution（解决方案）
- Tags（标签）

这样方便后续检索和自动学习。
## 发布前检查

提交前建议运行：

```bash
rg -n --hidden --glob '!.git/**' --glob '!node_modules/**' --glob '!venv/**' \
  '(api[_-]?key|secret|token|password|authorization|bearer|sk-|/Users/|账号|密钥|私有素材)' .
```

如果命中本机路径、账号、密钥或私有素材引用，请先删除或匿名化再发布。
