// 根据图片提供的功能分类
export default {
  categories: [
    {
      id: "b50",
      name: "各类b50",
      features: [
        {
          id: "new-b50",
          name: "新曲b50/旧曲b50",
          description: "提供新曲b50和旧曲b50的统计和排行功能。",
          usage: "使用命令 <code>新曲b50</code> 或 <code>旧曲b50</code> 获取相关信息。",          
          examples: [
            { 
              text: "输入 '新曲b50' 可以查看自己的新曲成绩排行榜", 
              image: "/src/assets/images/help.png" 
            }
          ],
          notes: [
            "数据可能会随游戏版本更新而变化",
            "请确保您的游戏账号已关联"
          ]
        },
        {
          id: "inch-b50",
          name: "寸止b50/锁血b50",
          description: "查看自己的寸止b50或锁血b50成绩排行统计。",
          usage: "使用命令 <code>寸止b50</code> 或 <code>锁血b50</code>",
          examples: []
        },
        {
          id: "sss-b50",
          name: "sss50/n50(9,50)",
          description: "查询SSS级别的成绩TOP50或9分以上的成绩TOP50。",
          usage: "输入 <code>sss50</code> 或 <code>n50 9</code> 来查询相应成绩。",
          examples: []
        },
        {
          id: "golden-b50",
          name: "金色b50(@用户名)",
          description: "查看自己或指定用户的金色成绩b50排行。",
          usage: "输入 <code>金色b50</code> 或 <code>金色b50@用户名</code>",
          examples: []
        },
        {
          id: "yb-b50",
          name: "yb50(杨氏b50)/b200",
          description: "查询杨氏算法计算的b50排行榜或扩展的b200排行榜。",
          usage: "输入 <code>yb50</code> 或 <code>b200</code>",
          examples: []
        },
        {
          id: "theoretical-b50",
          name: "理想b50/拟合定数b50",
          description: "根据玩家表现计算理论上可以达到的b50或通过拟合算法计算的定数b50。",
          usage: "输入 <code>理想b50</code> 或 <code>拟合定数b50</code>",
          examples: []
        }
      ]
    },
    {
      id: "query",
      name: "其他查询功能",
      features: [
        {
          id: "ccb",
          name: "ccb",
          description: "ccb功能描述，请在此处添加详细说明。",
          usage: "使用命令 <code>ccb</code> 查看相关信息。",
          examples: []
        },
        {
          id: "milk-dragon",
          name: "奶龙",
          description: "奶龙功能用于...(请添加详细描述)",
          usage: "使用命令 <code>奶龙</code> 获取相关信息。",
          examples: []
        },
        {          
          id: "bwc-selection",
          name: "帮我选",
          description: "帮助玩家从多个选项中随机选择一个。",
          usage: "使用命令 <code>帮我选 选项1 选项2 ...</code>",
          examples: [
            { 
              text: "输入 '帮我选 打maimai 打chunithm 睡觉' 会从这三个选项中随机选择一个", 
              image: "/src/assets/images/examples/bwc-example.png" 
            }
          ]
        },
        {
          id: "capoo",
          name: "capoo",
          description: "提供capoo相关的功能。",
          usage: "使用 <code>capoo</code> 命令获取相关信息。",
          examples: []
        },
        {
          id: "random-maimaidx",
          name: "随机读谱",
          description: "随机选取一首maimai中的歌曲进行读谱练习。",
          usage: "使用命令 <code>随机读谱</code>",
          examples: []
        },
        {
          id: "daily-recommend",
          name: "今日人品",
          description: "查看今天的人品值和推荐内容。",
          usage: "使用命令 <code>今日人品</code>",
          examples: []
        }
      ]
    },
    {
      id: "interactive-games",
      name: "整活游戏",
      features: [
        {
          id: "wordle",
          name: "wordle handle(猜成语/成语wordle)",
          description: "玩成语版本的wordle游戏，猜一个四字成语。",
          usage: "使用命令 <code>成语wordle</code> 开始一局游戏。",
          examples: []
        },
        {
          id: "custom-emoji",
          name: "表情包制作(关键词+文字/图片)",
          description: "根据关键词和文字或图片生成自定义表情包。",
          usage: "使用格式 <code>[关键词] [文字/图片]</code>",
          examples: []
        },
        {
          id: "sentence-abstraction",
          name: "语句抽象化(抽象[内容])",
          description: "将输入的文本转换为抽象表达方式。",
          usage: "使用命令 <code>抽象 [要抽象的内容]</code>",
          examples: []
        },
        {
          id: "fake-disease",
          name: "发病语录(发病 内容)",
          description: "生成发病状态的语录文本。",
          usage: "使用命令 <code>发病 [对象/内容]</code>",
          examples: []
        },
        {
          id: "random-song",
          name: "随机(随机曲海)",
          description: "从曲库中随机选取一首歌曲。",
          usage: "使用命令 <code>随机</code> 或 <code>随机曲海</code>",
          examples: []
        },
        {
          id: "constellation",
          name: "疯狂星座热线",
          description: "获取随机的星座相关内容。",
          usage: "使用命令 <code>疯狂星座热线</code>",
          examples: []
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
          usage: "qq群号：<p>一群：893036661（2000人，已满）</p> <p>二群：934787233（2000人，已满）</p> <p>三群：927929993（1000人，已满）</p> <p>四群：945342047（1000人，未满）</p> <p>五群：533544507（500人，已满）</p> <p>六群：902361264（500人，已满）</p> <p>七群：950940662（500人，已满）</p> <p>八群：1019881172（500人，已满）</p> <p>九群：1025362985（500人，已满）</p> <p>十群：1027762205（500人，已满）</p>",
        },
        {
          id: "donate",
          name: "赞助作者",
          description: "如果您喜欢这个Bot，可以考虑赞助作者以支持其持续开发。",
          examples: [
            { 
              image: "/src/assets/images/reward.jpg" 
            }
          ]
        },
        {
          id: "contact-author",
          name: "联系作者",
          description: "通过以下方式联系作者：",
          usage: "<br>QQ：947095724<br>邮箱：dale2003@126.com<br>GitHub：<a href='https://github.com/Dale2003'>http://github.com/Dale2003</a><br>个人主页：<a href='http://dale2003.cn'>http://dale2003.cn</a>",
        },
        {
          id: "help-image",
          name: "帮助图片",
          description: "查看Bot的使用帮助图片。",
          usage: "在qq群中发送<code>help</code>或直接在下面查看。<p>图片绘制与设计：筱凌依梦</p>",
          examples: [
            { 
              image: "/src/assets/images/help.png" 
            }
          ]
        }
      ]
    }
  ]
};
