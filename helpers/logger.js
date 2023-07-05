const winston = require("winston");
const { createLogger, format, transports } = winston;
const DailyRotateFile = require("winston-daily-rotate-file");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.DailyRotateFile({
      filename: "logs/%DATE%.log",
      handleExceptions: true,
      handleRejections: true,
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "7d",
      options: { flags: "a" },
      flags: "a",
      async: true,
    }),
  ],
});

module.exports = logger;
