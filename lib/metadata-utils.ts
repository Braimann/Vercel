/**
 * Generates a canonical URL for a given path
 * @param path The path to generate a canonical URL for (without leading slash)
 * @returns The full canonical URL
 */
export function getCanonicalUrl(path = ""): string {
  const baseUrl = "https://pharmaciedegardecasablanca.com"

  // If path is empty, return the base URL
  if (!path) return baseUrl

  // Ensure path doesn't start with a slash
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path

  // Return the full canonical URL
  return `${baseUrl}/${normalizedPath}`
}

