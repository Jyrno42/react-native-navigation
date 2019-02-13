#import "RNNDeckOptions.h"

@implementation RNNDeckOptions

- (instancetype)initWithDict:(NSDictionary *)dict {
	self = [super initWithDict:dict];

	self.enabled = [BoolParser parse:dict key:@"enabled"];
	
	return self;
}

@end
