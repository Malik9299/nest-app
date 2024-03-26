import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  async logFile(entry) {
    const formateEntry = `${Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/Chicago',
    }).format(new Date())}\t${entry}`;
    const content = 'Here is test';
    try {
      const directoryPath = path.join(__dirname, '...', '...', 'logs');
      const filePath = path.join(directoryPath, 'myFileLog.log');
      console.log('filePath:==>', filePath);
      if (!fs.existsSync(directoryPath)) {
        await fsPromises.mkdir(directoryPath, {
          recursive: true,
        });
      }
      await fsPromises.appendFile(filePath, content);
      //   await fsPromises.appendFile(filePath, formateEntry);
      //   await fsPromises.writeFile(filePath, 'Hello, world!', { flag: 'w' });
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
    }
  }
  log(message: any, context?: string) {
    const entry = `${context}\t${message}`;
    this.logFile(entry);
    super.log(message, context);
  }
  error(message: any, stackOrContext?: string) {
    const entry = `${stackOrContext}\t${message}`;
    this.logFile(entry);
    super.error(message, stackOrContext);
  }
}
