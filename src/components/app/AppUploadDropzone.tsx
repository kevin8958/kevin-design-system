import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  AppFieldShell,
  useAppInputTheme,
} from '@/components/app/appInputUtils';
import { renderAppTextNode } from '@/components/app/appUtils';

const statusColorKey = {
  uploaded: 'success',
  uploading: 'warning',
  error: 'error',
} as const;

const AppUploadDropzone = ({
  label,
  description,
  files,
  defaultFiles = [],
  onPressSelect,
  onRemoveFile,
  multiple = true,
  disabled = false,
  error = false,
  errorMsg,
  helperText,
  selectLabel = 'Select files',
  style,
  dropzoneStyle,
  testID,
}: App.UploadDropzoneProps) => {
  const { colors } = useAppInputTheme();
  const [internalFiles, setInternalFiles] = useState(defaultFiles);
  const resolvedFiles = files ?? internalFiles;

  return (
    <AppFieldShell
      label={label}
      helperText={helperText}
      errorMsg={errorMsg}
      invalid={error}
      style={style}
      testID={testID}
    >
      <View style={styles.root}>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled }}
          disabled={disabled}
          onPress={() => onPressSelect?.()}
          style={({ pressed }) => [
            styles.dropzone,
            {
              backgroundColor: pressed ? colors.accentSubtle : colors.surfaceMuted,
              borderColor: error ? colors.borderInvalid : colors.border,
            },
            dropzoneStyle,
          ]}
        >
          <Text style={[styles.dropzoneIcon, { color: colors.accent }]}>⇪</Text>
          {description
            ? renderAppTextNode(description, [
                styles.dropzoneTitle,
                { color: colors.text },
              ])
            : null}
          <Text style={[styles.dropzoneBody, { color: colors.helper }]}>
            {multiple ? 'Attach multiple files or screenshots.' : 'Attach one file.'}
          </Text>
          <View style={[styles.selectPill, { backgroundColor: colors.surface }]}>
            <Text style={[styles.selectPillText, { color: colors.text }]}>
              {selectLabel}
            </Text>
          </View>
        </Pressable>

        {resolvedFiles.length > 0 ? (
          <View style={styles.fileList}>
            {resolvedFiles.map((file) => {
              const accentColor =
                statusColorKey[file.status ?? 'uploaded'] === 'warning'
                  ? colors.warning
                  : statusColorKey[file.status ?? 'uploaded'] === 'error'
                    ? colors.error
                    : colors.success;

              return (
                <View
                  key={file.id}
                  style={[
                    styles.fileRow,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  <View style={styles.fileBody}>
                    <Text style={[styles.fileName, { color: colors.text }]}>
                      {file.name}
                    </Text>
                    <View style={styles.fileMeta}>
                      {file.sizeLabel ? (
                        <Text style={[styles.fileMetaText, { color: colors.helper }]}>
                          {file.sizeLabel}
                        </Text>
                      ) : null}
                      {file.status ? (
                        <Text style={[styles.fileMetaText, { color: accentColor }]}>
                          {file.status}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ disabled }}
                    disabled={disabled}
                    onPress={() => {
                      if (files === undefined) {
                        setInternalFiles((current) =>
                          current.filter((item) => item.id !== file.id),
                        );
                      }

                      onRemoveFile?.(file.id);
                    }}
                    style={({ pressed }) => [
                      styles.removeButton,
                      { backgroundColor: pressed ? colors.accentSubtle : 'transparent' },
                    ]}
                  >
                    <Text style={[styles.removeText, { color: colors.helper }]}>✕</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
    </AppFieldShell>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 12,
    width: '100%',
  },
  dropzone: {
    alignItems: 'center',
    borderRadius: 20,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  dropzoneIcon: {
    fontSize: 24,
    fontWeight: '700',
  },
  dropzoneTitle: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  dropzoneBody: {
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
  },
  selectPill: {
    borderRadius: 999,
    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectPillText: {
    fontSize: 12,
    fontWeight: '600',
  },
  fileList: {
    gap: 8,
  },
  fileRow: {
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  fileBody: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  fileName: {
    fontSize: 14,
    fontWeight: '500',
  },
  fileMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  fileMetaText: {
    fontSize: 12,
    lineHeight: 17,
    textTransform: 'capitalize',
  },
  removeButton: {
    alignItems: 'center',
    borderRadius: 999,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
  removeText: {
    fontSize: 13,
    fontWeight: '700',
  },
});

export default AppUploadDropzone;
