/** @jsxImportSource theme-ui */
import {
	ForwardedRef,
	forwardRef,
	KeyboardEvent,
	useEffect,
	useRef,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import {
	AutocompleteInput,
	AutocompleteWrapper,
	SuggestionItem,
	SuggestionsList,
} from './Autocomplete.styled';

export type AutocompleteVariants = 'outlined' | 'filled';
export type AutocompleteSizes = 'small' | 'medium' | string;

export interface AutocompleteInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	/**
	 * Specifies the visual variant of the Autocomplete input.
	 *
	 * 'outlined' - Input will have an outline.
	 * 'filled' - Input will have a solid background color.
	 *
	 * @default 'filled'
	 */
	variant?: AutocompleteVariants;

	/**
	 * Determines the color scheme of the Autocomplete input.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale';

	/**
	 * Specifies the size of the Autocomplete input.
	 *
	 * @default 'medium'
	 */
	size?: AutocompleteSizes;

	/**
	 * Determines if the Autocomplete input should have rounded edges.
	 *
	 * @default false
	 */
	rounded?: boolean;

	/**
	 * Message to display when there are no suggestions.
	 *
	 * @default 'No suggestions'
	 */
	noResultsMessage?: string;
	/**
	 * Allows for custom styles using ThemeUI's sx prop.
	 */
	sx?: ThemeUICSSObject;
}

export interface AutocompleteProps extends AutocompleteInputProps {
	/**
	 * An array of strings that will be used as suggestions.
	 *
	 * @default []
	 */
	suggestions?: string[];
	/**
	 * Callback function that will be called when a suggestion is selected.
	 *
	 * @default undefined
	 */
	onSuggestionSelect?: (selected: string) => void;
}

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
	(
		{
			suggestions = [],
			onSuggestionSelect,
			variant = 'filled',
			size = 'medium',
			rounded = false,
			color = 'primary',
			noResultsMessage = 'No suggestions',
			className,
			sx,
			...rest
		},
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const suggestionsListRef = useRef<HTMLUListElement>(null);
		const [inputValue, setInputValue] = useState('');
		const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(
			[],
		);
		const [wasSuggestionSelected, setWasSuggestionSelected] = useState(false);
		const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
		const [showSuggestions, setShowSuggestions] = useState(false);

		useEffect(() => {
			if (suggestionsListRef.current) {
				const listItems = Array.from(suggestionsListRef.current.childNodes);
				const targetItem = listItems[activeSuggestionIndex] as HTMLElement;

				if (targetItem) {
					const listItemTop = targetItem.offsetTop;
					const listItemBottom = listItemTop + targetItem.clientHeight;
					const listVisibleTop = suggestionsListRef.current.scrollTop;
					const listVisibleBottom =
						listVisibleTop + suggestionsListRef.current.clientHeight;

					if (listItemBottom > listVisibleBottom) {
						suggestionsListRef.current.scrollTop =
							listItemBottom - suggestionsListRef.current.clientHeight;
					} else if (listItemTop < listVisibleTop) {
						suggestionsListRef.current.scrollTop = listItemTop;
					}
				}
			}
		}, [activeSuggestionIndex]);

		useEffect(() => {
			if (inputValue && !wasSuggestionSelected) {
				const filtered = suggestions.filter((suggestion) =>
					suggestion.toLowerCase().includes(inputValue.toLowerCase()),
				);
				setFilteredSuggestions(filtered);
				setShowSuggestions(true);

				if (filtered.length === 1) {
					setActiveSuggestionIndex(0);
				} else {
					setActiveSuggestionIndex(-1);
				}
			} else {
				setShowSuggestions(false);
			}
		}, [inputValue, suggestions, wasSuggestionSelected]);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value);
			setWasSuggestionSelected(false);
		};

		const handleClick = (suggestion: string) => {
			setInputValue(suggestion);
			setShowSuggestions(false);
			onSuggestionSelect && onSuggestionSelect(suggestion);
			setWasSuggestionSelected(true);
		};

		const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'ArrowDown') {
				if (activeSuggestionIndex < filteredSuggestions.length - 1) {
					setActiveSuggestionIndex(activeSuggestionIndex + 1);
				}
			} else if (e.key === 'ArrowUp') {
				if (activeSuggestionIndex > 0) {
					setActiveSuggestionIndex(activeSuggestionIndex - 1);
				}
			} else if (e.key === 'Enter') {
				const selectedSuggestion = filteredSuggestions[activeSuggestionIndex];
				setInputValue((prev) => {
					if (prev !== selectedSuggestion) {
						onSuggestionSelect && onSuggestionSelect(selectedSuggestion);
					}
					setShowSuggestions(false);
					setWasSuggestionSelected(true);

					return selectedSuggestion;
				});
			} else if (e.key === 'Escape') {
				setShowSuggestions(false);
			}
		};

		return (
			<AutocompleteWrapper
				className={classNames('autocomplete-root', className, commonClassNames)}
				sx={sx}
			>
				<AutocompleteInput
					value={inputValue}
					$variant={variant}
					$size={size}
					$rounded={rounded}
					$color={color}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					ref={ref}
					className="autocomplete-input"
					{...rest}
				/>
				{showSuggestions && (
					<SuggestionsList
						ref={suggestionsListRef}
						$color={color}
						className="autocomplete-suggestions"
					>
						{filteredSuggestions.length > 0 ? (
							filteredSuggestions.map((suggestion, index) => (
								<SuggestionItem
									key={suggestion}
									onClick={() => handleClick(suggestion)}
									className={
										index === activeSuggestionIndex ? 'active-suggestion' : ''
									}
								>
									{suggestion}
								</SuggestionItem>
							))
						) : (
							<li>{noResultsMessage}</li>
						)}
					</SuggestionsList>
				)}
			</AutocompleteWrapper>
		);
	},
);

Autocomplete.displayName = 'Autocomplete';
