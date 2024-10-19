import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination ({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const renderPageNumbers = () => {
    const pages = [];

    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(currentPage + 1, totalPages);

    if (currentPage === 1) {
      endPage = Math.min(currentPage + 2, totalPages);
    }

    if (currentPage === totalPages) {
      startPage = Math.max(currentPage - 2, 1);
    }

    if (startPage > 2) {
      pages.push(
        <TouchableOpacity key={1} onPress={() => onPageChange(1)} style={styles.pageButton}>
          <Text style={styles.pageText}>1</Text>
        </TouchableOpacity>
      );
      pages.push(
        <Text key="start-ellipsis" style={styles.ellipsis}>
          ...
        </Text>
      );
    } else if (startPage === 2) {
      pages.push(
        <TouchableOpacity key={1} onPress={() => onPageChange(1)} style={styles.pageButton}>
          <Text style={styles.pageText}>1</Text>
        </TouchableOpacity>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <TouchableOpacity
          key={i}
          onPress={() => onPageChange(i)}
          style={[styles.pageButton, currentPage === i && styles.activePageButton]}
        >
          <Text style={[styles.pageText, currentPage === i && styles.activePageText]}>{i}</Text>
        </TouchableOpacity>
      );
    }

    if (endPage < totalPages - 1) {
      pages.push(
        <Text key="end-ellipsis" style={styles.ellipsis}>
          ...
        </Text>
      );
      pages.push(
        <TouchableOpacity key={totalPages} onPress={() => onPageChange(totalPages)} style={styles.pageButton}>
          <Text style={styles.pageText}>{totalPages}</Text>
        </TouchableOpacity>
      );
    } else if (endPage === totalPages - 1) {
      pages.push(
        <TouchableOpacity key={totalPages} onPress={() => onPageChange(totalPages)} style={styles.pageButton}>
          <Text style={styles.pageText}>{totalPages}</Text>
        </TouchableOpacity>
      );
    }

    return pages;
  };

  return <View style={styles.paginationContainer}>{renderPageNumbers()}</View>;
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  pageButton: {
    marginHorizontal: 5,
    padding: 10,
  },
  activePageButton: {
    backgroundColor: '#EC6724',
    borderRadius: 5,
  },
  pageText: {
    color: 'black',
    fontWeight: 'bold',
  },
  activePageText: {
    color: 'white',
  },
  ellipsis: {
    marginHorizontal: 5,
    fontSize: 18,
  },
});