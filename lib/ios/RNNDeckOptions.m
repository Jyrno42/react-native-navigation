#import "RNNDeckOptions.h"

@implementation RNNDeckOptions

- (instancetype)initWithDict:(NSDictionary *)dict {
	self = [super initWithDict:dict];

	self.enabled = [[BoolParser parse:dict key:@"enabled"] getWithDefaultValue:NO];
	self.swipeToDismiss = [[BoolParser parse:dict key:@"swipeToDismiss"] getWithDefaultValue:YES];
	self.presentDuration = [NSNumber numberWithDouble:[[DoubleParser parse:dict key:@"presentDuration"] getWithDefaultValue:0.3]];
	self.dismissDuration = [NSNumber numberWithDouble:[[DoubleParser parse:dict key:@"dismissDuration"] getWithDefaultValue:0.3]];
	
	return self;
}

@end
