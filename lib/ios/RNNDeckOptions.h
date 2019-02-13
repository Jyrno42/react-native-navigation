#import "RNNOptions.h"

@interface RNNDeckOptions : RNNOptions

@property (nonatomic) BOOL enabled;
@property (nonatomic, strong) NSNumber* presentDuration;
@property (nonatomic, strong) NSNumber* dismissDuration;

@end
