export = index;
declare class index {
	static Footer(props: any): any;
	static Group(_ref: any): any;
	static Logo(props: any): any;
	static Toolbar(props: any): any;
	constructor(props: any);
	autoCompleteLeafs(): any;
	componentDidMount(): void;
	componentDidUpdate(): void;
	componentWillReceiveProps(nextProps: any): void;
	componentWillUnmount(): void;
	forceUpdate(callback: any): void;
	getQueryEditor(): any;
	getVariableEditor(): any;
	refresh(): void;
	render(): any;
	setState(partialState: any, callback: any): void;
}
declare namespace index {
	class Button {
		constructor(props: any);
		forceUpdate(callback: any): void;
		render(): any;
		setState(partialState: any, callback: any): void;
	}
	namespace Button {
		namespace propTypes {
			function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace label {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onClick {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace title {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	class Menu {
		constructor(props: any);
		componentWillUnmount(): void;
		forceUpdate(callback: any): void;
		handleClick(e: any): void;
		render(): any;
		setState(partialState: any, callback: any): void;
	}
	namespace Menu {
		namespace propTypes {
			function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace label {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace title {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	function MenuItem(_ref: any): any;
	namespace MenuItem {
		namespace propTypes {
			function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace label {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onSelect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onSelect {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace title {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	class QueryEditor {
		constructor(props: any);
		componentDidMount(): void;
		componentDidUpdate(prevProps: any): void;
		componentWillUnmount(): void;
		forceUpdate(callback: any): void;
		getClientHeight(): any;
		getCodeMirror(): any;
		render(): any;
		setState(partialState: any, callback: any): void;
	}
	namespace QueryEditor {
		namespace propTypes {
			function editorTheme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace editorTheme {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onClickReference(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onClickReference {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onEdit {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onHintInformationRender(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onHintInformationRender {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onMergeQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onMergeQuery {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onPrettifyQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onPrettifyQuery {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onRunQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onRunQuery {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace readOnly {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function schema(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace schema {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace value {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	class ResultViewer {
		componentDidMount(): void;
		componentDidUpdate(): void;
		componentWillUnmount(): void;
		forceUpdate(callback: any): void;
		getClientHeight(): any;
		getCodeMirror(): any;
		render(): any;
		setState(partialState: any, callback: any): void;
		shouldComponentUpdate(nextProps: any): any;
	}
	namespace ResultViewer {
		namespace propTypes {
			function ResultsTooltip(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace ResultsTooltip {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function editorTheme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace editorTheme {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace value {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	class Select {
		constructor(props: any);
		componentWillUnmount(): void;
		forceUpdate(callback: any): void;
		handleClick(e: any): void;
		render(): any;
		setState(partialState: any, callback: any): void;
	}
	namespace Select {
		namespace propTypes {
			function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace label {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onSelect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onSelect {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace title {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	function SelectOption(_ref: any): any;
	namespace SelectOption {
		namespace propTypes {
			function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace label {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onSelect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onSelect {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function selected(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace selected {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace value {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	class ToolbarButton {
		constructor(props: any);
		forceUpdate(callback: any): void;
		render(): any;
		setState(partialState: any, callback: any): void;
	}
	namespace ToolbarButton {
		namespace propTypes {
			function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace label {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onClick {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace title {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	class VariableEditor {
		constructor(props: any);
		componentDidMount(): void;
		componentDidUpdate(prevProps: any): void;
		componentWillUnmount(): void;
		forceUpdate(callback: any): void;
		getClientHeight(): any;
		getCodeMirror(): any;
		render(): any;
		setState(partialState: any, callback: any): void;
	}
	namespace VariableEditor {
		namespace propTypes {
			function editorTheme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace editorTheme {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onEdit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onEdit {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onHintInformationRender(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onHintInformationRender {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onMergeQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onMergeQuery {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onPrettifyQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onPrettifyQuery {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function onRunQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace onRunQuery {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace readOnly {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace value {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
			function variableToType(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			namespace variableToType {
				function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
			}
		}
	}
	namespace propTypes {
		function ResultsTooltip(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace ResultsTooltip {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function defaultQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace defaultQuery {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function editorTheme(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace editorTheme {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function fetcher(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		function getDefaultFieldNames(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace getDefaultFieldNames {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function onEditOperationName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace onEditOperationName {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function onEditQuery(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace onEditQuery {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function onEditVariables(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace onEditVariables {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function onToggleDocs(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace onToggleDocs {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function onToggleHistory(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace onToggleHistory {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function operationName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace operationName {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function query(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace query {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function response(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace response {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function schema(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace schema {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function storage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace storage {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
		function variables(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		namespace variables {
			function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
		}
	}
}
