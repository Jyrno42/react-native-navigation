#import <Foundation/Foundation.h>
#import "RNNScreenTransition.h"

// See: https://github.com/CocoaPods/CocoaPods/issues/7594
#if __has_include("DeckTransition-Swift.h")
	#define HAS_DECK_TRANSITION
	#import "DeckTransition-Swift.h"
#elif __has_include("DeckTransition/DeckTransition-Swift.h")
	#define HAS_DECK_TRANSITION
	#import <DeckTransition/DeckTransition-Swift.h>
#endif

@interface RNNAnimationsTransitionDelegate : NSObject <UIViewControllerAnimatedTransitioning, UIViewControllerTransitioningDelegate>

@property (nonatomic, strong) RNNScreenTransition* screenTransition;
@property (nonatomic) BOOL isDismiss;
@property (nonatomic, strong) id deckDelegate;
@property (nonatomic) UIModalPresentationStyle modalPresentationStyle;

- (instancetype)initWithScreenTransition:(RNNScreenTransition *)screenTransition isDismiss:(BOOL)isDismiss;

@end
