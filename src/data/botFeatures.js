// 功能清单以当前 meowmeow 实际加载的插件与 shared 命令注册层为准。
export default {
  categories: [
    {
      id: "b50",
      name: "B50 与 Rating",
      features: [
        {
          id: "standard-b50",
          name: "标准 B50 / B40",
          description: "查询舞萌 DX Best 50 或旧版 Best 40 成绩图。",
          usage: "发送 <code>b50</code> 或 <code>b40</code>。命令后可填写水鱼用户名，也可以直接 AT 群友。",
          notes: ["完整成绩类查询建议先使用 dfbind 完成水鱼 OAuth 授权。"]
        },
        {
          id: "achievement-b50",
          name: "AP、理论与达成率 B50",
          description: "按 AP、AP+、AAA、SSS 或 SS 等成绩状态生成 B50。",
          usage: "可用命令：<code>ap50</code>、<code>ap+50</code>、<code>a50</code>、<code>sss50</code>、<code>ss50</code>。"
        },
        {
          id: "special-b50",
          name: "寸止、锁血、最差与随机 B50",
          description: "查看接近下一档的成绩、刚好保住档位的成绩、最低成绩或随机成绩。",
          usage: "可用命令：<code>寸止50</code>、<code>锁血50</code>、<code>w50</code>、<code>r50</code>。"
        },
        {
          id: "ideal-b50",
          name: "理想、拟合与杨氏 B50",
          description: "使用不同算法观察理想成绩、拟合定数或杨氏算法下的 B50。",
          usage: "可用命令：<code>ideal50</code>、<code>fit50</code>、<code>杨氏b50</code>、<code>DXb50</code>。"
        },
        {
          id: "version-b50",
          name: "新曲、旧曲与全曲 B50",
          description: "分别查看当前版本新曲、旧曲或全曲范围内的成绩。",
          usage: "可用命令：<code>new50</code>、<code>old50</code>、<code>all50</code>；也支持 <code>新曲b50</code>、<code>旧曲b50</code>。"
        },
        {
          id: "styled-b50",
          name: "新版、圈版、简洁与合并 B50",
          description: "使用不同图片布局或筛选参数生成个性化 B50。",
          usage: "可用命令：<code>新b50</code>、<code>新yb50</code>、<code>圈b50</code>、<code>简洁b50</code>、<code>合并b50</code>。<br><code>合并b50 -h</code> 可查看筛选参数。"
        },
        {
          id: "historical-b50",
          name: "历代版本 B50",
          description: "按指定舞萌版本的规则和曲库查询历史 B50/B40。",
          usage: "示例：<code>DX2020b40</code>、<code>DX2024b50</code>、<code>DX2025b50</code>、<code>DX2026b50</code>、<code>DX2026b35</code>。"
        },
        {
          id: "filtered-b50",
          name: "按星数、难度、等级、分类或歌曲筛选",
          description: "只统计满足特定谱面条件的 B50。",
          usage: "示例：<code>五星b50</code>、<code>紫谱b50</code>、<code>14+b50</code>、<code>东方b50</code>、<code>紫id 123 b50</code>。"
        },
        {
          id: "named-song-b50",
          name: "指定梗曲 B50",
          description: "查看预设热门曲目或梗曲对应的 B50。",
          usage: "示例：<code>潘b50</code>、<code>原神b50</code>、<code>海底谭b50</code>、<code>武士b50</code>。"
        },
        {
          id: "other-games-best",
          name: "其他音游算法换算图",
          description: "把玩家的舞萌成绩套用 Phigros、Arcaea、CHUNITHM、Rotaeno 等音游的算分方式，生成对应规则下的 Best 图片。",
          usage: "可用命令：<code>pgrb19</code>/<code>pgrb50</code>、<code>arcb30</code>/<code>arcb50</code>、<code>chub30</code>/<code>chub50</code>、<code>rotb30</code>/<code>rotb50</code>、<code>b100</code>。",
          notes: ["数据来源仍是玩家的舞萌成绩，不会查询其他音游账号或成绩。"]
        }
      ]
    },
    {
      id: "scores",
      name: "成绩与分析",
      features: [
        {
          id: "score-list",
          name: "分数列表",
          description: "按等级、定数、难度颜色、DX 分或歌曲分类分页查看全部成绩。",
          usage: "示例：<code>14+分数列表</code>、<code>13.7分数列表</code>、<code>14+dx分数列表</code>、<code>紫14分数列表</code>、<code>东方分数列表</code>。页码和 AT/用户名可跟在命令后。"
        },
        {
          id: "filtered-score-list",
          name: "高级筛选分数列表",
          description: "通过参数组合筛选等级、定数、版本、谱师、完成率、FC/FS 等条件。",
          usage: "发送 <code>分数列表 -h</code> 查看完整参数。"
        },
        {
          id: "status-score-list",
          name: "AP / FC 与水平分数列表",
          description: "按 AP、FC、AP+、FC+ 或预设水平区间整理成绩。",
          usage: "示例：<code>AP分数列表</code>、<code>FC+分数列表</code>、<code>牛逼分数列表</code>、<code>菜逼分数列表</code>。"
        },
        {
          id: "level-analysis",
          name: "等级成绩分析",
          description: "统计指定等级的平均成绩、DX 分与完成情况。",
          usage: "示例：<code>13+成绩分析</code>、<code>14平均分数</code>、<code>12分数分析</code>。"
        },
        {
          id: "song-charter-analysis",
          name: "曲目 / 谱师分析",
          description: "分析成绩集中出现的曲目或谱师，也可只统计鸟加成绩。",
          usage: "可用命令：<code>曲目分析</code>、<code>谱师分析</code>、<code>鸟加曲目分析</code>、<code>鸟加谱师分析</code>。"
        },
        {
          id: "value-analysis",
          name: "含金量与含水量分析",
          description: "从拟合定数和完成情况分析成绩的含金量或含水量。",
          usage: "可用命令：<code>含金量分析</code>、<code>水分分析</code>、<code>含水量分析</code>，前面加“鸟加”可只分析鸟加成绩。"
        },
        {
          id: "power-analysis",
          name: "底力分析",
          description: "使用硬核 Rating / 杨氏 Rating 模型分析玩家底力。",
          usage: "可用命令：<code>底力分析</code>、<code>硬核rating</code>、<code>杨氏rating</code>、<code>yrating</code>。"
        },
        {
          id: "random-score-grade",
          name: "随机成绩与随机段位",
          description: "从自己的成绩中随机抽取记录，或按难度和级别生成随机段位。",
          usage: "示例：<code>随机成绩</code>、<code>随机成绩 牛逼</code>、<code>随机段位 Master 上级</code>。"
        },
        {
          id: "ranking-advice",
          name: "玩家排名与推分建议",
          description: "查看自己在玩家数据中的位置，或获得下一步推分建议。",
          usage: "可用命令：<code>我有多菜</code>、<code>查看玩家排名</code>、<code>推分建议</code>、<code>推分</code>。"
        },
        {
          id: "rating-calculator",
          name: "单曲 Rating 计算器",
          description: "在谱面定数、达成率和单曲 Rating 之间进行换算。",
          usage: "示例：<code>13.7的鸟加是多少分</code>、<code>13.7的100.2是多少分</code>、<code>13.7的多少是300分</code>。"
        },
        {
          id: "score-pk",
          name: "成绩 PK",
          description: "与指定玩家比较达成率或 DX 分成绩。",
          usage: "示例：<code>14+鸟加成绩pk @群友</code>、<code>13dx分对战 @群友</code>。"
        }
      ]
    },
    {
      id: "songs",
      name: "曲目与谱面",
      features: [
        {
          id: "song-search",
          name: "查歌与模糊查歌",
          description: "通过歌曲名、别名或 SongID 查询曲目信息。",
          usage: "示例：<code>查歌 潘多拉</code>、<code>模糊查歌 潘多拉</code>、<code>id 834</code>、<code>潘多拉是什么歌</code>。"
        },
        {
          id: "condition-search",
          name: "按定数、BPM、曲师或谱师查歌",
          description: "根据谱面或制作信息筛选歌曲。",
          usage: "可用命令：<code>定数查歌</code>、<code>bpm查歌</code>、<code>曲师查歌</code>、<code>谱师查歌</code>。"
        },
        {
          id: "music-info",
          name: "minfo 与“mai什么”",
          description: "生成 song_bg 风格的单曲详情图，或随机推荐一首舞萌歌曲。",
          usage: "示例：<code>minfo 834</code>、<code>minfo 潘多拉</code>、<code>今天mai什么</code>。"
        },
        {
          id: "score-line",
          name: "分数线计算",
          description: "计算指定歌曲和难度允许的 TAP/GREAT 等数量。",
          usage: "发送 <code>分数线 帮助</code> 查看格式和示例。"
        },
        {
          id: "alias-query",
          name: "别名查询与投稿",
          description: "查看歌曲已有别名，或向别名库提交新别名。",
          usage: "示例：<code>潘多拉有什么别名</code>、<code>添加别名 834 新别名</code>。"
        },
        {
          id: "ds-change",
          name: "谱面定数变化",
          description: "查看一张谱面在历代版本中的定数变化。",
          usage: "示例：<code>定数变化 紫 潘多拉</code>、<code>dschange 834</code>。"
        },
        {
          id: "rating-tables",
          name: "定数表与完成表",
          description: "生成等级定数表、拟合定数表或按成绩状态统计的完成表。",
          usage: "示例：<code>14+定数表</code>、<code>日服14+定数表</code>、<code>14+拟合定数表</code>、<code>14+ap完成表</code>、<code>舞将完成表</code>。"
        },
        {
          id: "difficulty-tables",
          name: "14 / 14+ 难度表",
          description: "查看“舞萌官方定数保护协会”提供的 14 与 14+ 难度表。",
          usage: "发送 <code>14难度表</code> 或 <code>14+难度表</code>。"
        },
        {
          id: "treasure-search",
          name: "称号、地图与素材查询",
          description: "查询称号获取条件、地图信息以及头像、姓名框、背景等素材 ID。",
          usage: "可用命令：<code>查询称号</code>、<code>查询地图</code>、<code>mapid</code>、<code>iconid</code>、<code>plateid</code>、<code>frameid</code>、<code>partnerid</code>、<code>charaid</code>、<code>titleid</code>、<code>musicid</code>。"
        }
      ]
    },
    {
      id: "progress",
      name: "进度、段位与赛事",
      features: [
        {
          id: "level-progress",
          name: "等级与版本牌进度",
          description: "按等级、目标成绩或版本牌查看完成进度。",
          usage: "示例：<code>13ap进度</code>、<code>14+sss+进度</code>、<code>舞将进度</code>、<code>霸者进度</code>。"
        },
        {
          id: "course-score",
          name: "段位成绩",
          description: "查询当前国服或指定区服、版本的段位成绩。",
          usage: "示例：<code>段位 真十段</code>、<code>国服2025段位 真十段</code>、<code>日服pri+段位 里皆传</code>。"
        },
        {
          id: "course-history",
          name: "段位曲与段位历史",
          description: "查询歌曲曾出现在哪些段位，或生成指定段位/版本的历史总表。",
          usage: "示例：<code>查段位曲 Bad Apple</code>、<code>段位历史 真十段</code>、<code>段位总表 国服2025</code>。"
        },
        {
          id: "legacy-course",
          name: "旧框段位表",
          description: "查看旧框版本段位表。",
          usage: "示例：<code>旧框段位表 真十段</code>。"
        },
        {
          id: "kaleidxscope",
          name: "万花筒门与棱镜塔",
          description: "查询 Kaleidxscope 各门的解锁条件和成绩表。",
          usage: "示例：<code>青门解锁条件</code>、<code>万花筒紫门成绩表</code>、<code>棱镜塔紫谱成绩表</code>。"
        },
        {
          id: "wmc",
          name: "WMC 成绩表与排行榜",
          description: "查看 WMC 第一、第二阶段各组成绩表和排行榜。",
          usage: "示例：<code>wmc1st成绩表 A组</code>、<code>wmc1st排行榜 B组</code>、<code>wmc2nd成绩表 A组</code>。"
        },
        {
          id: "kop",
          name: "KOP 排行榜",
          description: "查看 KOP 日服或国际服排行榜。",
          usage: "发送 <code>kop日服排行榜</code> 或 <code>kop国际服排行榜</code>。"
        },
        {
          id: "server-status",
          name: "舞萌服务器状态",
          description: "获取当前舞萌服务器状态页面截图。",
          usage: "可用命令：<code>maiserver</code>、<code>mai状态</code>、<code>服务器炸了</code>、<code>华立死了</code>。"
        }
      ]
    },
    {
      id: "account",
      name: "账号、数据与工具",
      features: [
        {
          id: "oauth-bind",
          name: "水鱼 OAuth 授权",
          description: "授权 Bot 以短期 OAuth Token 读取完整水鱼成绩，不保存用户访问令牌。",
          usage: "发送 <code>dfbind</code>，打开 Bot 返回的授权链接并确认授权。",
          notes: ["授权链接不要转发给其他人。", "撤销授权可使用回复中提供的水鱼应用管理页面。"]
        },
        {
          id: "download-records",
          name: "下载水鱼数据",
          description: "把完整水鱼成绩导出为 JSON 群文件。",
          usage: "在群聊发送 <code>下载水鱼数据</code>。管理员可以 AT 群友导出对方已授权的数据。",
          notes: ["需要先完成 dfbind OAuth 授权。"]
        },
        {
          id: "dxpass",
          name: "每日 DXPASS",
          description: "根据 QQ 生成当天固定的随机 DXPASS 图片。",
          usage: "发送 <code>dxpass</code>。"
        },
        {
          id: "ping",
          name: "Ping",
          description: "检查 Bot 是否在线并查看响应状态。",
          usage: "发送 <code>ping</code>。"
        },
        {
          id: "help-command",
          name: "Bot 帮助",
          description: "查看 Bot 内置帮助图片。",
          usage: "发送 <code>help</code>。"
        },
        {
          id: "choose",
          name: "帮我选",
          description: "从多个候选项中随机选择一个，也支持在 Bot 提问后继续发送选项。",
          usage: "示例：<code>帮我选 打舞萌 睡觉 吃饭</code>。",
          examples: [
            {
              text: "输入“帮我选 打maimai 打chunithm 睡觉”，Bot 会从选项中随机选择。",
              image: "/src/assets/images/examples/bwc-example.png"
            }
          ]
        }
      ]
    },
    {
      id: "games",
      name: "游戏与整活",
      features: [
        {
          id: "guess-games",
          name: "猜歌曲、猜曲绘、猜谱面与猜 BGA",
          description: "开启舞萌猜歌系列小游戏，并可查看各模式排行榜。",
          usage: "发送 <code>猜歌曲</code>、<code>猜曲绘</code>、<code>猜谱面</code> 或 <code>猜BGA</code> 查看玩法；排行榜命令在模式名后加“排行榜”，结束可发送 <code>不玩了</code>。"
        },
        {
          id: "wordle",
          name: "Wordle",
          description: "游玩英文单词 Wordle，支持提示和结束当前游戏。",
          usage: "可用命令：<code>wordle</code>、<code>猜单词</code>、<code>提示</code>、<code>结束</code>。"
        },
        {
          id: "handle",
          name: "猜成语 Handle",
          description: "游玩四字成语猜词游戏。",
          usage: "可用命令：<code>handle</code>、<code>猜成语</code>、<code>成语提示</code>、<code>结束成语游戏</code>。"
        },
        {
          id: "maidle",
          name: "Maidle",
          description: "按提示猜舞萌歌曲的每日猜题游戏。",
          usage: "发送 <code>maidle</code> 开始。"
        },
        {
          id: "mahjong",
          name: "日麻听牌与算点",
          description: "练习清一色听牌和日麻番符算点。",
          usage: "可用命令：<code>日麻听牌</code>、<code>日麻算点</code>；游戏中按提示使用“答/猜”或“算”提交答案。"
        },
        {
          id: "daily-luck",
          name: "今日、本周与本月人品",
          description: "查询每日固定人品值，并汇总本周或本月的平均幸运指数。",
          usage: "可用命令：<code>j</code>、<code>jrrp</code>、<code>今日人品</code>、<code>本周人品</code>、<code>本月人品</code>。"
        },
        {
          id: "annual-report",
          name: "年度人品报告",
          description: "根据历史人品记录生成年度统计。",
          usage: "发送 <code>年度人品</code>。"
        },
        {
          id: "ccb-kindness",
          name: "CCB 与恩情课文",
          description: "根据主题生成“XX笑传之CCB”标题，或生成指定主题的恩情课文。",
          usage: "示例：<code>ccb 舞萌玩家</code>、<code>恩情课文 宇航员猫娘</code>。"
        },
        {
          id: "nailong-cat",
          name: "奶龙与宇航员猫娘",
          description: "发送奶龙或宇航员猫娘相关图片内容。",
          usage: "发送 <code>奶龙</code>、<code>我是奶龙</code> 或 <code>宇航员猫娘</code>。"
        },
        {
          id: "greetings-chat",
          name: "早安与晚安",
          description: "和猫娘互道早安或晚安。",
          usage: "发送 <code>早安</code> 或 <code>晚安</code>。"
        }
      ]
    },
    {
      id: "taiko",
      name: "太鼓之达人",
      features: [
        {
          id: "taiko-help",
          name: "太鼓功能帮助",
          description: "查看太鼓插件的完整命令说明。",
          usage: "发送 <code>taikohelp</code>。"
        },
        {
          id: "taiko-song",
          name: "太鼓歌曲查询与谱面预览",
          description: "按关键词或 ID 查询歌曲，并查看指定难度谱面。",
          usage: "示例：<code>天竺2000是什么歌咚</code>、<code>查看太鼓谱面 松天竺2000</code>。"
        },
        {
          id: "taiko-plaza",
          name: "鼓众广场绑定与成绩",
          description: "绑定广场 ID、更新成绩并查看自己的广场资料或单曲成绩。",
          usage: "可用命令：<code>绑定广场 ID</code>、<code>解绑广场</code>、<code>taikoupdate</code>、<code>我的广场</code>、<code>tinfo 歌曲</code>。"
        },
        {
          id: "taiko-best",
          name: "太鼓 B20 / PC20",
          description: "生成太鼓 Rating B20 或按游玩次数排序的 PC20 图片。",
          usage: "发送 <code>taikob20</code> 或 <code>taikopc20</code>；支持 AT 群友和 <code>-lv</code>、<code>-rank</code>、<code>-fc</code>、<code>-genre</code>、<code>-series</code> 等筛选参数。"
        },
        {
          id: "taiko-lists-progress",
          name: "太鼓全分数列表与段位进度",
          description: "查看指定星级的全部成绩，或生成段位完成进度图。",
          usage: "示例：<code>7星全分数列表</code>、<code>四段进度</code>、<code>名人进度</code>。"
        },
        {
          id: "taiko-random",
          name: "太鼓随机选歌",
          description: "按难度和星级随机选择一首太鼓歌曲并查看成绩。",
          usage: "示例：<code>来个松8</code>、<code>来个里10</code>。"
        }
      ]
    },
    {
      id: "support-author",
      name: "支持作者",
      features: [
        {
          id: "join-group",
          name: "加入群组",
          description: "加入作者的群组以获取最新信息和交流。",
          usage: "qq群号：<p>一群：893036661（2000人，已满）</p> <p>二群：934787233（2000人，已满）</p> <p>三群：927929993（1000人，已满）</p> <p>四群：945342047（1000人，未满）</p> <p>五群：533544507（500人，已满）</p> <p>六群：902361264（500人，已满）</p> <p>七群：950940662（500人，已满）</p> <p>八群：1019881172（500人，已满）</p> <p>九群：1025362985（500人，已满）</p> <p>十群：1027762205（500人，已满）</p>"
        },
        {
          id: "donate",
          name: "赞助作者",
          description: "如果您喜欢这个 Bot，可以考虑赞助作者以支持持续开发。",
          examples: [
            { image: "/src/assets/images/reward.jpg" }
          ]
        },
        {
          id: "contact-author",
          name: "联系作者",
          description: "通过以下方式联系作者：",
          usage: "<br>QQ：947095724<br>邮箱：dale2003@126.com<br>GitHub：<a href='https://github.com/Dale2003'>https://github.com/Dale2003</a><br>个人主页：<a href='http://dale2003.cn'>http://dale2003.cn</a>"
        },
        {
          id: "help-image",
          name: "帮助图片",
          description: "查看 Bot 的传统帮助图片。",
          usage: "在 QQ 群中发送 <code>help</code> 或直接在下面查看。<p>图片绘制与设计：筱凌依梦</p>",
          examples: [
            { image: "/src/assets/images/help.png" }
          ]
        }
      ]
    }
  ]
};
