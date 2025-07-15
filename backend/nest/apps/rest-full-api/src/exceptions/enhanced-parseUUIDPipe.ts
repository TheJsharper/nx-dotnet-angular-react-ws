import { ArgumentMetadata, ParseUUIDPipe } from "@nestjs/common"

// ...
export class EnhancedParseUUIDPipe extends ParseUUIDPipe {
  private readonly customVersion?: string;

  constructor(options?: ConstructorParameters<typeof ParseUUIDPipe>[0]) {
    super(options);
    if (typeof options === 'string') {
      this.customVersion = options;
    } else if (typeof options === 'object' && options && 'version' in options) {
      this.customVersion = options.version as string;
    }
  }

  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    try {
      return await super.transform(value, metadata);
    } catch {
      throw this.exceptionFactory(
        `Validation failed (uuid${
          this.customVersion ? ` v ${this.customVersion}` : ''
        } is expected; given "${value}")`
      );
    }
  }
}