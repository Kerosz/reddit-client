import {
  List,
  AutoSizer,
  WindowScroller,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';

interface IProps {
  component: React.ElementType<any>;
  data: Array<any>;
  rootProps?: object;
}

const ListWrapper: React.FC<IProps> = ({
  component: Component,
  data,
  rootProps,
}) => {
  const cache = new CellMeasurerCache({
    defaultHeight: 150,
    fixedWidth: true,
  });

  return (
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              autoHeight
              width={width}
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              rowHeight={cache.rowHeight}
              deferredMeasurementCache={cache}
              rowCount={data.length}
              rowRenderer={({ index, style, key, parent }) => {
                const dataObject: any = data[index];

                return (
                  <CellMeasurer
                    cache={cache}
                    columnIndex={0}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                  >
                    <li
                      style={{ ...style, listStyle: 'none', paddingBottom: 10 }}
                    >
                      <Component data={dataObject} {...rootProps} />
                    </li>
                  </CellMeasurer>
                );
              }}
            />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
};

export default ListWrapper;
