import log4js from 'log4js'

// 对 category 和 appenders 进行配置
log4js.configure({
  appenders: {
    stdout: {
      type: "stdout"
    },
    debug: {
      // 设置类型为 dateFile
      type: 'dateFile',
      // 配置文件名为 test.log
      filename: 'logs/kangleqiu-debug.log',
      // 指定编码格式为 utf-8
      encoding: 'utf-8',
      // 日志文件按日期（天）切割
      pattern: "yyyy-MM-dd",
      // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
      keepFileExt: true,
      // 输出的日志文件名是都始终包含 pattern 日期结尾
      alwaysIncludePattern: true,
      backups: 30, // 保留 3 个旧的日志文件
    },
    error: {
      // 设置类型为 dateFile
      type: 'dateFile',
      // 配置文件名为 test.log
      filename: 'logs/kangleqiu-error.log',
      // 指定编码格式为 utf-8
      encoding: 'utf-8',
      // 日志文件按日期（天）切割
      pattern: "yyyy-MM-dd",
      // 回滚旧的日志文件时，保证以 .log 结尾 （只有在 alwaysIncludePattern 为 false 生效）
      keepFileExt: true,
      // 输出的日志文件名是都始终包含 pattern 日期结尾
      alwaysIncludePattern: true,
      level: 'error',
      backups: 30, // 保留 3 个旧的日志文件
    }
  },
  categories: {
    // 设置默认的 categories
    default: { appenders: ['debug', 'error', 'stdout'], level: 'debug' },
    error: { appenders: ['error'], level: 'error' }, // 新增的错误日志 category
  }
});

const logger = log4js.getLogger('default');

export default logger;
