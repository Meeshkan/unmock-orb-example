import * as winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'startup-school-workshop' },
  transports: [
    new winston.transports.Console(),
  ],
});

export default logger;
