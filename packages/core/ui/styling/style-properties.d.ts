import { TransformFunctionsInfo } from '../animation';
import { CoreTypes } from '../../core-types';
import { Color } from '../../color';
import { CssProperty, CssAnimationProperty, ShorthandProperty, InheritedCssProperty } from '../core/properties';
import { Style } from '../styling/style';
import { Font, FontStyle, FontWeight } from './font';
import { Background } from './background';

export namespace Length {
	export function parse(text: string): CoreTypes.LengthType;
	export function equals(a: CoreTypes.LengthType, b: CoreTypes.LengthType): boolean;
	/**
	 * Converts Length unit to device pixels.
	 * @param length The Length to convert.
	 * @param auto Value to use for conversion of "auto". By default is Math.NaN.
	 */
	export function toDevicePixels(length: CoreTypes.LengthType, auto?: number): number;
	export function convertToString(length: CoreTypes.LengthType): string;
}

export namespace PercentLength {
	export function parse(text: string): CoreTypes.PercentLengthType;
	export function equals(a: CoreTypes.PercentLengthType, b: CoreTypes.PercentLengthType): boolean;
	/**
	 * Converts PercentLengthType unit to device pixels.
	 * @param length The PercentLengthType to convert.
	 * @param auto Value to use for conversion of "auto". By default is Math.NaN.
	 * @param parentAvailableWidth Value to use as base when converting percent unit. By default is Math.NaN.
	 */
	export function toDevicePixels(length: CoreTypes.PercentLengthType, auto?: number, parentAvailableWidth?: CoreTypes.px): number;
	export function convertToString(length: CoreTypes.PercentLengthType): string;
}

export const zeroLength: CoreTypes.LengthType;

export const rotateProperty: CssAnimationProperty<Style, number>;
export const scaleXProperty: CssAnimationProperty<Style, number>;
export const scaleYProperty: CssAnimationProperty<Style, number>;
export const translateXProperty: CssAnimationProperty<Style, CoreTypes.dip>;
export const translateYProperty: CssAnimationProperty<Style, CoreTypes.dip>;

export function transformConverter(text: string): TransformFunctionsInfo;

export const clipPathProperty: CssProperty<Style, string>;
export const colorProperty: InheritedCssProperty<Style, Color>;

export const backgroundProperty: ShorthandProperty<Style, string>;
export const backgroundColorProperty: CssAnimationProperty<Style, Color>;
export const backgroundImageProperty: CssProperty<Style, string>;
export const backgroundRepeatProperty: CssProperty<Style, BackgroundRepeatType>;
export const backgroundSizeProperty: CssProperty<Style, string>;
export const backgroundPositionProperty: CssProperty<Style, string>;

export const borderColorProperty: ShorthandProperty<Style, string | Color>;
export const borderTopColorProperty: CssProperty<Style, Color>;
export const borderRightColorProperty: CssProperty<Style, Color>;
export const borderBottomColorProperty: CssProperty<Style, Color>;
export const borderLeftColorProperty: CssProperty<Style, Color>;

export const borderWidthProperty: ShorthandProperty<Style, string | CoreTypes.LengthType>;
export const borderTopWidthProperty: CssProperty<Style, CoreTypes.LengthType>;
export const borderRightWidthProperty: CssProperty<Style, CoreTypes.LengthType>;
export const borderBottomWidthProperty: CssProperty<Style, CoreTypes.LengthType>;
export const borderLeftWidthProperty: CssProperty<Style, CoreTypes.LengthType>;

export const borderRadiusProperty: ShorthandProperty<Style, string | CoreTypes.LengthType>;
export const borderTopLeftRadiusProperty: CssProperty<Style, CoreTypes.LengthType>;
export const borderTopRightRadiusProperty: CssProperty<Style, CoreTypes.LengthType>;
export const borderBottomRightRadiusProperty: CssProperty<Style, CoreTypes.LengthType>;
export const borderBottomLeftRadiusProperty: CssProperty<Style, CoreTypes.LengthType>;

export const zIndexProperty: CssProperty<Style, number>;
export const visibilityProperty: CssProperty<Style, VisibilityType>;
export const opacityProperty: CssAnimationProperty<Style, number>;

export const minWidthProperty: CssProperty<Style, CoreTypes.dip | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit>;
export const minHeightProperty: CssProperty<Style, CoreTypes.dip | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit>;
export const widthProperty: CssAnimationProperty<Style, CoreTypes.PercentLengthType>;
export const heightProperty: CssAnimationProperty<Style, CoreTypes.PercentLengthType>;
export const lineHeightProperty: CssProperty<Style, number>;
export const marginProperty: ShorthandProperty<Style, string | CoreTypes.PercentLengthType>;
export const marginLeftProperty: CssProperty<Style, CoreTypes.PercentLengthType>;
export const marginRightProperty: CssProperty<Style, CoreTypes.PercentLengthType>;
export const marginTopProperty: CssProperty<Style, CoreTypes.PercentLengthType>;
export const marginBottomProperty: CssProperty<Style, CoreTypes.PercentLengthType>;

export const paddingProperty: ShorthandProperty<Style, string | CoreTypes.LengthType>;
export const paddingLeftProperty: CssProperty<Style, CoreTypes.LengthType>;
export const paddingRightProperty: CssProperty<Style, CoreTypes.LengthType>;
export const paddingTopProperty: CssProperty<Style, CoreTypes.LengthType>;
export const paddingBottomProperty: CssProperty<Style, CoreTypes.LengthType>;

export const horizontalAlignmentProperty: CssProperty<Style, HorizontalAlignmentType>;
export const verticalAlignmentProperty: CssProperty<Style, VerticalAlignmentType>;

export const fontSizeProperty: InheritedCssProperty<Style, number>;
export const fontFamilyProperty: InheritedCssProperty<Style, string>;
export const fontStyleProperty: InheritedCssProperty<Style, FontStyle>;
export const fontWeightProperty: InheritedCssProperty<Style, FontWeight>;

export const backgroundInternalProperty: CssProperty<Style, Background>;
export const fontInternalProperty: InheritedCssProperty<Style, Font>;

export const androidElevationProperty: CssProperty<Style, number>;
export const androidDynamicElevationOffsetProperty: CssProperty<Style, number>;

export type BackgroundRepeatType = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
export type VisibilityType = 'visible' | 'hidden' | 'collapse';
export type HorizontalAlignmentType = 'left' | 'center' | 'right' | 'stretch';
export namespace HorizontalAlignment {
	export const LEFT: 'left';
	export const CENTER: 'center';
	export const RIGHT: 'right';
	export const STRETCH: 'stretch';
}
export type VerticalAlignmentType = 'top' | 'middle' | 'bottom' | 'stretch' | 'text-top' | 'text-bottom' | 'super' | 'sub' | 'baseline';
export namespace VerticalAlignment {
	export const TOP: 'top';
	export const MIDDLE: 'middle';
	export const BOTTOM: 'bottom';
	export const STRETCH: 'stretch';
	export const TEXTTOP: 'text-top';
	export const TEXTBOTTOM: 'text-bottom';
	export const SUPER: 'super';
	export const SUB: 'sub';
	export const BASELINE: 'baseline';
}
