import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useResolvedAppScheme } from '@/components/app/appUtils';

type AppPaginationPalette = {
  buttonBackground: string;
  buttonBorder: string;
  buttonText: string;
  buttonPressed: string;
  activeBackground: string;
  activeText: string;
  ghostText: string;
  ghostPressed: string;
  dots: string;
  disabled: string;
};

const palette: Record<'light' | 'dark', AppPaginationPalette> = {
  light: {
    buttonBackground: '#FFFFFF',
    buttonBorder: '#D4D4D4',
    buttonText: '#404040',
    buttonPressed: '#F5F5F5',
    activeBackground: '#171717',
    activeText: '#FFFFFF',
    ghostText: '#525252',
    ghostPressed: '#F5F5F5',
    dots: '#A3A3A3',
    disabled: '#D4D4D4',
  },
  dark: {
    buttonBackground: '#171717',
    buttonBorder: '#404040',
    buttonText: '#E5E5E5',
    buttonPressed: '#262626',
    activeBackground: '#F5F5F5',
    activeText: '#171717',
    ghostText: '#D4D4D4',
    ghostPressed: '#262626',
    dots: '#737373',
    disabled: '#525252',
  },
};

const getPageRange = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
) => {
  const totalPageNumbers = siblingCount * 2 + 3;

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);
  const pages: Array<number | 'dots'> = [1];

  if (leftSiblingIndex > 2) {
    pages.push('dots');
  } else {
    for (let page = 2; page < leftSiblingIndex; page += 1) {
      pages.push(page);
    }
  }

  for (let page = leftSiblingIndex; page <= rightSiblingIndex; page += 1) {
    pages.push(page);
  }

  if (rightSiblingIndex < totalPages - 1) {
    pages.push('dots');
  } else {
    for (let page = rightSiblingIndex + 1; page < totalPages; page += 1) {
      pages.push(page);
    }
  }

  pages.push(totalPages);

  return pages;
};

const AppPagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  disabled = false,
  onPageChange,
  style,
  itemStyle,
  testID,
}: App.PaginationProps) => {
  const scheme = useResolvedAppScheme();
  const colors = palette[scheme];
  const safeTotalPages = Math.max(1, totalPages);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const pages = getPageRange(safeCurrentPage, safeTotalPages, siblingCount);

  const movePage = (page: number) => {
    if (disabled) return;
    if (page < 1 || page > safeTotalPages || page === safeCurrentPage) return;
    onPageChange?.(page);
  };

  return (
    <View testID={testID} style={[styles.paginationRoot, style]}>
      <Pressable
        accessibilityLabel="Previous page"
        accessibilityRole="button"
        accessibilityState={{ disabled: disabled || safeCurrentPage === 1 }}
        disabled={disabled || safeCurrentPage === 1}
        onPress={() => movePage(safeCurrentPage - 1)}
        style={({ pressed }) => [
          styles.iconButton,
          {
            backgroundColor: pressed ? colors.ghostPressed : 'transparent',
            opacity: disabled || safeCurrentPage === 1 ? 0.45 : 1,
          },
          itemStyle,
        ]}
      >
        <Text style={[styles.iconText, { color: colors.ghostText }]}>‹</Text>
      </Pressable>

      {pages.map((page, index) =>
        page === 'dots' ? (
          <View key={`dots-${index}`} style={styles.dotsWrap}>
            <Text style={[styles.dotsText, { color: colors.dots }]}>…</Text>
          </View>
        ) : (
          <Pressable
            key={page}
            accessibilityLabel={`Page ${page}`}
            accessibilityRole="button"
            accessibilityState={{ disabled, selected: page === safeCurrentPage }}
            disabled={disabled}
            onPress={() => movePage(Number(page))}
            style={({ pressed }) => [
              styles.pageButton,
              {
                backgroundColor:
                  page === safeCurrentPage
                    ? colors.activeBackground
                    : pressed
                      ? colors.buttonPressed
                      : colors.buttonBackground,
                borderColor:
                  page === safeCurrentPage ? colors.activeBackground : colors.buttonBorder,
                opacity: disabled ? 0.45 : 1,
              },
              itemStyle,
            ]}
          >
            <Text
              style={[
                styles.pageText,
                {
                  color:
                    page === safeCurrentPage ? colors.activeText : colors.buttonText,
                },
              ]}
            >
              {page}
            </Text>
          </Pressable>
        ),
      )}

      <Pressable
        accessibilityLabel="Next page"
        accessibilityRole="button"
        accessibilityState={{
          disabled: disabled || safeCurrentPage === safeTotalPages,
        }}
        disabled={disabled || safeCurrentPage === safeTotalPages}
        onPress={() => movePage(safeCurrentPage + 1)}
        style={({ pressed }) => [
          styles.iconButton,
          {
            backgroundColor: pressed ? colors.ghostPressed : 'transparent',
            opacity: disabled || safeCurrentPage === safeTotalPages ? 0.45 : 1,
          },
          itemStyle,
        ]}
      >
        <Text style={[styles.iconText, { color: colors.ghostText }]}>›</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationRoot: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  pageButton: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    minWidth: 36,
    paddingHorizontal: 10,
  },
  pageText: {
    fontSize: 14,
    fontWeight: '600',
  },
  iconButton: {
    alignItems: 'center',
    borderRadius: 12,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  iconText: {
    fontSize: 18,
    fontWeight: '600',
  },
  dotsWrap: {
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    width: 24,
  },
  dotsText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default AppPagination;
