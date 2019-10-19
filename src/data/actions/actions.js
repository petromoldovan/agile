import types from './types'

export const updateWordFormatting = payload => ({
	type: types.REQUEST_UPDATE_WORD_FORMATTING,
	payload
})

export const updateWordFormattingSuccess = payload => ({
	type: types.SUCCESS_UPDATE_WORD_FORMATTING,
	payload
})

export const updateWordFormattingFail = payload => ({
	type: types.FAIL_UPDATE_WORD_FORMATTING,
	payload
})
