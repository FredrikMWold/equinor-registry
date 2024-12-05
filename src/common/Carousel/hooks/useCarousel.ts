import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect, KeyboardEvent } from 'react';
import { CarouselApi, CarouselProps } from '../types';

export const useCarousel = ({ opts, plugins, setApi, orientation }: CarouselProps) => {
	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: orientation === 'horizontal' ? 'x' : 'y',
		},
		plugins,
	);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const onSelect = useCallback((api: CarouselApi) => {
		if (!api) {
			return;
		}

		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	const scrollPrev = useCallback(() => {
		api?.scrollPrev();
	}, [api]);

	const scrollNext = useCallback(() => {
		api?.scrollNext();
	}, [api]);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				scrollPrev();
			} else if (event.key === 'ArrowRight') {
				event.preventDefault();
				scrollNext();
			}
		},
		[scrollPrev, scrollNext],
	);

	useEffect(() => {
		if (!api || !setApi) {
			return;
		}

		setApi(api);
	}, [api, setApi]);

	useEffect(() => {
		if (!api) {
			return;
		}

		onSelect(api);
		api.on('reInit', onSelect);
		api.on('select', onSelect);

		return () => {
			api?.off('select', onSelect);
		};
	}, [api, onSelect]);

	return {
		carouselRef,
		api,
		canScrollPrev,
		canScrollNext,
		scrollPrev,
		scrollNext,
		handleKeyDown,
	};
};
