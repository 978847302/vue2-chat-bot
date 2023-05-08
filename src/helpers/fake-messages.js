export const fakeMessages = [
  {
    'type': 'text',
    'text': '你好。 祝你今天过得愉快!',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': '我们今天能为您提供什么帮助?',
    'options': [
      {
        'text': '搜索支持文章',
        'value': 'search',
        'action': 'postback'
      },
      {
        'text': '提交支持票',
        'value': 'submit_ticket',
        'action': 'postback'
      }
    ],
    'disableInput': true
  },
  {
    'type': 'text',
    'text': '请输入您的问题',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': '以下是我们知识库的结果。',
    'options': [
      {
        'text': 'How to create a menu',
        'value': 'https://google.com',
        'action': 'url'
      },
      {
        'text': 'How to add a submenu to a menu',
        'value': 'https://google.com',
        'action': 'url'
      },
      {
        'text': "Not what I'm looking for",
        'value': 'result_not_match',
        'action': 'postback'
      }
    ],
    'disableInput': true
  },
  {
    'type': 'text',
    'text': '很遗憾听到这个消息。 请输入您的问题，我们将为您创建一张票。',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': '全做完了！ 您的支持票已创建。',
    'options': [
      {
        'text': 'View ticket',
        'value': 'https://google.com',
        'action': 'url'
      }
    ],
    'disableInput': false
  }
]
